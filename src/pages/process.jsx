import React, { useState, useEffect } from 'react';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Stepper from '../components/stepper.jsx';
import Upload from '../components/Upload.jsx';
import axios from 'axios';

export default function Process() {
  const [files, setFiles] = useState([]); // State lifted to parent
  const [analysisResult, setAnalysisResult] = useState(""); // State for storing Cohere API results
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const allSteps = [
    {
      name: "Upload file",
      Component: () => (
        <div className='step-content .upload-page-container'>
        <Upload files={files} setFiles={setFiles} />
        </div>
      ),
    },
    {
      name: "Processing file",
      Component: () => (
        <div className='step-content .upload-page-container'>
          {files.length > 0
            ? "Processing your file..."
            : "No files uploaded yet."}
        </div>
      ),
    },
    {
      name: "Review results",
      Component: () => (
        <div className='step-content .upload-page-container'>
          {files.length > 0 ? (
            <>
              <h3>File Processed Successfully</h3>
              <p>Analyzing with Cohere...</p>
              {isLoading ? (
                <p>Loading analysis...</p>
              ) : (
                <div>
                  <h4>Cohere Analysis:</h4>
                  <pre>{analysisResult}</pre>
                </div>
              )}
            </>
          ) : (
            "No files available for review."
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (files.length > 0) {
      // Once files are uploaded, start processing
      handleFileProcessing(files);
    }
  }, [files]);

  const handleFileProcessing = async (uploadedFiles) => {
    // Extract text from the files (this can be customized to your extraction logic)
    const textContent = await extractTextFromFile(uploadedFiles);

    if (textContent) {
      setIsLoading(true);

      try {
        // Send text content to Cohere for analysis
        const response = await axios.post('/api/analyze', { text: textContent });

        if (response.data && response.data.analysis) {
          setAnalysisResult(response.data.analysis);
        } else {
          setAnalysisResult("No analysis returned.");
        }
      } catch (error) {
        setAnalysisResult("Error occurred while analyzing the document.");
        console.error("Cohere API error: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const extractTextFromFile = async (files) => {
    // Placeholder function for extracting text from the files
    // Implement the actual file parsing and text extraction logic here
    const text = "Sample extracted text from the document...";
    return text;
  };

  return (
    <>
      <Header />
      <div className="stepper-container">
        <h1 className='stepper-title'>Evaluate your document</h1>
        <Stepper steps={allSteps} />
      </div>
      <Footer />
    </>
  );
}
