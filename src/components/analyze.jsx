import React, { useState } from 'react';
import axios from 'axios';

const Analyzer = () => {
    const [file, setFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Function to analyze text with Hugging Face API
    const analyzeWithHuggingFace = async (text) => {
        setIsAnalyzing(true);
        try {
            const response = await axios.post(
                'https://api-inference.huggingface.co/models/gpt2',  // Replace with your model's endpoint
                { inputs: text },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.API_KEY}`,  // Use the token from the .env file
                    },
                }
            );
            setAnalysisResult(response.data[0]?.generated_text || 'No response from the model.');
        } catch (error) {
            console.error('Error analyzing text with Hugging Face:', error);
            setAnalysisResult('Failed to analyze the document.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    // Handle file upload and trigger analysis
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
        }
    };

    const handleAnalyze = (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please upload a file!');
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = async () => {
            const fileText = fileReader.result;

            // Send the text to Hugging Face API for analysis
            await analyzeWithHuggingFace(fileText);
        };
        fileReader.readAsText(file); // Assuming the file is text-based or easily parsable
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Document Analyzer</h1>
            <form onSubmit={handleAnalyze}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="file"
                        accept=".txt,.pdf"
                        onChange={handleFileUpload}
                        style={{ padding: '10px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Analyze Document
                </button>
            </form>

            {isAnalyzing && <p>Analyzing the document... Please wait.</p>}

            {analysisResult && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
                    <h3>Analysis Result:</h3>
                    <p>{analysisResult}</p>
                </div>
            )}
        </div>
    );
};

export default Analyzer;
