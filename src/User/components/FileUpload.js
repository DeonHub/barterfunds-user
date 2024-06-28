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

          return { file, fileURL };
        });

        if (!file.type.startsWith('image')) {
         console.log('')
        }
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
    <>
      <div
        className="nk-kycfm-upload-box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="upload-zone dropzone dz-clickable" style={{ display: 'block' }}>
          {selectedFile && (
            <>
              <div className={`preview-image ${isHovered ? 'hovered' : ''}`}>
                {selectedFile.file.type.startsWith('image') ? (
                  <>
                    <img src={selectedFile.fileURL} alt="Uploaded File" />
                    <div className="overlay"></div>
                  </>
                ) : ('')}
                <button className="remove-button" onClick={handleRemoveFile} style={{ cursor: 'pointer'}}>
                  X
                </button>
              </div>
            </>
          )}
          {(!selectedFile || !selectedFile.file.type.startsWith('image')) && (
              <div className="dz-message" data-dz-message="">
                <span className="dz-message-text">Drag and drop file</span>
                <span className="dz-message-or">or</span>
                <label htmlFor={id} className="btn btn-primary">
                  SELECT
                  <input
                    type="file"
                    accept="image/*, application/pdf" // Accept only images and pdf files
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

      {selectedFile && !selectedFile.file.type.startsWith('image') && (
        <div className="view-file mt-3">
          <span>View File: </span>
          <a href={selectedFile.fileURL} target="_blank" rel="noopener noreferrer">Uploaded File</a>
          {/* <button onClick={handleRemoveFile} style={{ cursor: 'pointer'}}>
            X
          </button> */}
          <span
              onClick={handleRemoveFile}
              className={`bg-white btn btn-sm btn-outline-light btn-icon success float-end`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove File"
              
            >
              <span className="icon material-symbols-outlined">
                delete
              </span>
            </span>
        </div>
      )}
    </>
  );
};

export default FileUpload;
