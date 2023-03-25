import React, { useState } from 'react';
import './YourDevice.css';

function FileInput() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected file:', file);
    console.log('Description:', description);
    // Add your code to handle the form submission here
  };

  return (
    <form className="file-input-form" onSubmit={handleSubmit}>
      <div className="file-input-container">
        <div className="file-input-label">Select a file</div>
        <input
          type="file"
          className="file-input"
          id="fileInput"
          onChange={handleFileInputChange}
        />
        <label htmlFor="fileInput">Choose file</label>
        <div className="drag-and-drop-container">
          <div className="drag-and-drop-label">or drag and drop a file here</div>
        </div>
      </div>
      <div className="description-input-container">
        <label htmlFor="descriptionInput" className="description-input-label">Description</label>
        <input
          type="text"
          id="descriptionInput"
          value={description}
          onChange={handleDescriptionInputChange}
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default FileInput;
