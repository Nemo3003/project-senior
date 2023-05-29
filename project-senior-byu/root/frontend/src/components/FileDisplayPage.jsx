import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FileDisplayPage = () => {
  const { id } = useParams();
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    // Fetch the file URL from the server
    fetch(`http://localhost:8081/files/${id}`)
      .then(response => response.blob())
      .then(data => {
        const url = URL.createObjectURL(data);
        setFileUrl(url);
      })
      .catch(error => {
        console.error('Error retrieving file data:', error);
        // Handle the error or display an error message
      });
  }, [id]);

  if (!fileUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>File Download</h2>
      <a href={fileUrl} download>Download File</a>
    </div>
  );
};

export default FileDisplayPage;
