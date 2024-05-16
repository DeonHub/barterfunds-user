import React, { useState } from 'react';

const FileUpload = ({
    id,
    name,
    setSelectedProof,  
    setSubmitButton

}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileURL = event.target.result;

  
        setSelectedFile(() => {
          if (name) {
            setSelectedProof(file, name);
          }
          
          if (setSubmitButton) {
            setSubmitButton(true);
          }
          return fileURL;
        });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleRemoveFile = () => {
    setSelectedFile(() => {
      if (name) {
        setSelectedProof("", name);
      } else {
        setSelectedProof(null);
      }
      
      if (setSubmitButton) {
        setSubmitButton(false);
      }
      return null;
    });
  };
  

  return (
    <div
      className="nk-kycfm-upload-box"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="upload-zone dropzone dz-clickable" style={{ display: 'block' }}>
        {selectedFile && (
          <div className={`preview-image ${isHovered ? 'hovered' : ''}`}>
            <img src={selectedFile} alt="Uploaded File" />
            <div className="overlay"></div>
            <button className="remove-button" onClick={handleRemoveFile} style={{ cursor: 'pointer'}}>
              X
            </button>
          </div>
        )}
        {!selectedFile && (
          <div className="dz-message" data-dz-message="">
            <span className="dz-message-text">Drag and drop file</span>
            <span className="dz-message-or">or</span>
            <label htmlFor={id} className="btn btn-primary">
              SELECT
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                id={id}
                name={name}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
