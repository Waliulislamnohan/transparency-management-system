import React, { useState, useRef } from 'react';

export default function UploadForm() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isThankYouVisible, setIsThankYouVisible] = useState(false);
    
    const fileInputRef = useRef(null);
    const fileListRef = useRef(null);
    const filePreviewRef = useRef(null);
    
    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFiles = (files) => {
        const uniqueFiles = files.filter(file => !uploadedFiles.some(existingFile => existingFile.name === file.name));
        
        if (uniqueFiles.length === 0) {
            alert("No new files to upload.");
            return;
        }

        const validFiles = uniqueFiles.filter(file => validateFile(file));
        setUploadedFiles(prevFiles => [...prevFiles, ...validFiles]);

        filePreviewRef.current.style.display = 'block';  // Show the file preview section
        fileListRef.current.innerHTML = '';  // Clear previous file list

        validFiles.forEach(file => {
            const li = document.createElement('li');
            li.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
            fileListRef.current.appendChild(li);
        });
    };

    const validateFile = (file) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5 MB

        if (!allowedTypes.includes(file.type)) {
            alert(`File type not supported: ${file.name}`);
            return false;
        }

        if (file.size > maxSize) {
            alert(`File size exceeds 5MB: ${file.name}`);
            return false;
        }

        return true;
    };

    const handleBrowseFilesClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (event) => {
        handleFiles(Array.from(event.target.files));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Simulate a file upload delay
        setTimeout(() => {
            setIsLoading(false);
            setIsThankYouVisible(true);
            resetForm();
        }, 2000);
    };

    const resetForm = () => {
        setUploadedFiles([]);
        fileInputRef.current.value = ''; // Clear the file input
        filePreviewRef.current.style.display = 'none'; // Hide the preview section
        fileListRef.current.innerHTML = ''; // Clear the file list
        setIsThankYouVisible(false);
    };

    return (
        <>
            {/* Login Container */}
            <div className="container" id="loginContainer">
                <h2>Login</h2>
                <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="button" onClick={handleBrowseFilesClick}>Login</button>
                </form>
            </div>

            {/* Form Container */}
            <div className="container" id="formContainer">
                <h2>Submit Your Document</h2>
                <form id="documentForm" onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Drag-and-Drop File Upload Area */}
                    <div 
                        id="dropArea" 
                        className="drop-area" 
                        onDrop={handleDrop} 
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <p>
                            Drag & drop your files here, or <a href="#" onClick={handleBrowseFilesClick}>Browse files</a>
                        </p>
                        <input
                            type="file"
                            id="document"
                            name="document"
                            accept=".pdf,.doc,.docx,.jpg,.png"
                            required
                            hidden
                            multiple
                            ref={fileInputRef}
                            onChange={handleFileInputChange}
                        />
                    </div>

                    {/* File Preview Area */}
                    <div 
                        id="filePreview" 
                        className="file-preview" 
                        ref={filePreviewRef} 
                        style={{ display: 'none' }}
                    >
                        <h4>File to be uploaded:</h4>
                        <ul id="fileList" ref={fileListRef}></ul>
                    </div>

                    <label htmlFor="category">Select Category</label>
                    <select id="category" name="category" required>
                        <option value="">Choose a category</option>
                        <option value="budgets">Budgets and Operations</option>
                        <option value="finance">Financial Reports</option>
                        <option value="policies">Govt. Policies</option>
                        <option value="development">Development Projects</option>
                        <option value="employment">Employment</option>
                        <option value="services">Public Services</option>
                    </select>

                    <button className='button' type="submit">Submit</button>
                </form>
            </div>

            {/* Loading Spinner */}
            {isLoading && (
                <div className="container" id="loadingContainer">
                    <p>Uploading...</p>
                    <div className="spinner"></div>
                </div>
            )}

            {/* Thank You Message */}
            {isThankYouVisible && (
                <div className="container" id="thankYouContainer">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" 
                        alt="Checkmark" 
                    />
                    <h1>Thank You!</h1>
                    <p>Your file has been successfully uploaded.</p>
                </div>
            )}
        </>
    );
}
