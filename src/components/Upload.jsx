import React, { useState } from 'react';

export default function Upload({ files, setFiles }) {
  const [fileError, setFileError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Handle file drag and drop
  function handleFileDrop(event) {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    addFiles(newFiles);
  }

  // Handle file browsing
  function handleFileChange(event) {
    const newFiles = Array.from(event.target.files);
    addFiles(newFiles);
    event.target.value = null; // Reset the input value
  }

  // Function to add files, ensuring no duplicates
  function addFiles(newFiles) {
    const existingFileNames = new Set(files.map(file => file.name));
    const uniqueFiles = newFiles.filter(newFile => !existingFileNames.has(newFile.name));
    setFiles(prevFiles => [...prevFiles, ...uniqueFiles]);
    setFileError('');
  }

  // Function to remove a file
  function removeFile(event, fileName) {
    event.preventDefault();
    setFiles(files.filter(file => file.name !== fileName));
  }

  // Handle document form submission (simulated file upload)
  function handleDocumentSubmit(event) {
    event.preventDefault();
    if (files.length === 0) {
      setFileError('Please select a file to upload.');
      return;
    }
    setIsUploading(true);

    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);

      // Reset the form after showing success message
      setTimeout(() => {
        setFiles([]); // Clear selected files
        setUploadSuccess(false);
      }, 2000);
    }, 1500);
  }

  return (
    <div className="container form-container" id="formContainer">
      {!isUploading && !uploadSuccess && (
        <div>
          {fileError && <p className="file-error-message">{fileError}</p>}
          <form id="documentForm" onSubmit={handleDocumentSubmit}>
            <div
              id="dropArea"
              className="drop-area"
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p>
                Drag & drop your files here, or{' '}
                <a onClick={() => document.getElementById('document').click()}>Browse files</a>
              </p>
              <input
                type="file"
                id="document"
                name="document"
                accept=".pdf,.doc,.docx,.jpg,.png"
                hidden
                multiple
                onChange={handleFileChange}
              />
            </div>

            {files.length > 0 && (
              <div id="filePreview" className="file-preview">
                <h4>Files to be uploaded:</h4>
                <ul id="fileList">
                  {files.map((file, index) => (
                    <li key={index} className="file-item" id='file-item'>
                      <span>
                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                      <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
                      </svg>
                      <label htmlFor="file-item">{file.name}</label>
                      </span>
                      <button className="remove-file-button" onClick={(event) => removeFile(event, file.name)}>X</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <select id="category" name="category">
              <option value="">Choose a category</option>
              <option value="budgets">Budgets and Operations</option>
              <option value="finance">Financial Reports</option>
              <option value="policies">Govt. Policies</option>
              <option value="development">Development Projects</option>
              <option value="employment">Employment</option>
              <option value="services">Public Services</option>
            </select>

            <button className="button" type="submit">Submit</button>
          </form>
        </div>
      )}

      <div className="message-con">
        {isUploading && (
          <div className="container loading-container" id="loadingContainer">
            <p>Uploading...</p>
            <div className="spinner"></div>
          </div>
        )}

        {uploadSuccess && (
          <div className="container thank-you-container" id="thankYouContainer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" alt="Checkmark"/>
            <h1>Thank You!</h1>
            <p>Your file has been successfully uploaded.</p>
          </div>
        )}
      </div>
    </div>
  );
}
