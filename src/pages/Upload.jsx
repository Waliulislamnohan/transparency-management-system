// src/pages/Login.js
import React, { useState } from 'react';

export default function Login() {
  const mockUsername = 'user';
  const mockPassword = '1234';

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [fileError, setFileError] = useState(''); // New error state for file upload
  const [success, setSuccess] = useState(false); // Track login success
  const [files, setFiles] = useState([]); // Store selected files
  const [isUploading, setIsUploading] = useState(false); // Upload state
  const [uploadSuccess, setUploadSuccess] = useState(false); // Upload success state

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.username === '' || formData.password === '') {
      setError('Please fill in all fields.');
      setSuccess(false);
    } else if (formData.username === mockUsername && formData.password === mockPassword) {
      setError('');
      setSuccess(true); // Simulate successful login
    } else {
      setError('Invalid username or password.');
      setSuccess(false);
    }
  }

  // Handle file drag and drop
  function handleFileDrop(event) {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    addFiles(newFiles);
  }

// Handle file browsing
function handleFileChange(event) {
  const newFiles = Array.from(event.target.files);
  
  addFiles(newFiles); // Call addFiles with the new files
  
  // Reset the input field to allow re-selection of the same files
  event.target.value = null; // Reset the input value
}

// Function to add files, allowing previously removed files to be selected again
function addFiles(newFiles) {
  const existingFileNames = new Set(files.map(file => file.name)); // Use a Set for quick look-up
  
  const uniqueFiles = newFiles.filter(newFile => !existingFileNames.has(newFile.name)); // Check against Set
  
  setFiles(prevFiles => [...prevFiles, ...uniqueFiles]); // Add only unique files
  setFileError(''); // Clear file error if files are added
}

  // Function to open file browse when 'Browse files' is clicked
  function handleBrowseClick() {
    document.getElementById('document').click();
  }

  // Function to remove a file from the list
  function removeFile(event, fileName) {
    event.preventDefault(); // Prevent default behavior of the button
    const filteredFiles = files.filter(file => file.name !== fileName);
    setFiles(filteredFiles);
    if (filteredFiles.length === 0) {
      setFileError(''); // Clear error if no files are left
    }
  }

  // Handle document form submission (simulated file upload)
  function handleDocumentSubmit(event) {
    event.preventDefault();

    if (files.length === 0) {
      setFileError('Please select a file to upload.'); // Set error if no files are selected
      return; // Exit the function if no files are selected
    }

    setIsUploading(true); // Show uploading message

    // Simulate file upload delay (1200ms)
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true); // Set upload success

      // Show the success message for 1000ms before resetting the form
      setTimeout(() => {
        setFiles([]); // Clear the selected files
        setUploadSuccess(false); // Reset upload success state
      }, 2000); // Show success message for 1000ms

    }, 1500); // Simulate file upload time
  }

  return (
    <div className="upload-page-container">
      {!success ? (
        <div className='login-container'>
          <h2 className="login-title">Login</h2>
          {error && <p className="login-error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-group">
              <label htmlFor="username" className="login-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password" className="login-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      ) : (
        <div className="container form-container" id="formContainer">
          {!isUploading && !uploadSuccess && (
            <div>
              <h2>Submit Your Document</h2>
              {fileError && <p className="file-error-message">{fileError}</p>}
              <form id="documentForm" onSubmit={handleDocumentSubmit}>
                <div
                  id="dropArea"
                  className="drop-area"
                  onDrop={handleFileDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <p>
                    Drag & drop your files here, or <a onClick={handleBrowseClick}>Browse files</a>
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
                        <li key={index} className="file-item">
                          {file.name}
                          <button className="remove-file-button" onClick={(event) => removeFile(event, file.name)}>X</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <label htmlFor="category">Select Category</label>
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

          <div className="messege-con">
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
      )}
    </div>
  );
}
