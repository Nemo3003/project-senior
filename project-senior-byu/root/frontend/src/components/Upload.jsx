import React, { useState } from 'react';
import axios from 'axios';

function Sh() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post('/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      })
      .then((response) => {
        // Handle the response after successful upload
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
      <div>{uploadProgress}%</div>
      <progress value={uploadProgress} max="100" />
    </div>
  );
};

export default Sh;
