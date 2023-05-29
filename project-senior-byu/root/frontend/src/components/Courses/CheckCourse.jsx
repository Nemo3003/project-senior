import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://localhost:8081/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('File uploaded successfully!');
        Swal.fire({
          icon: 'success',
          title: 'File uploaded successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        setSelectedFile(null);
        navigate('/courses')
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error uploading file',
          text: error.message
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Upload Proof of Payment</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="mb-4">
          <span className="bg-white px-4 py-2 rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-red-400">
            <FontAwesomeIcon icon={faUpload} className="w-6 h-6 inline-block mr-2" />
            {selectedFile ? selectedFile.name : 'Choose a file'}
          </span>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        <button
          type="submit"
          disabled={!selectedFile}
          className="bg-blue text-black px-4 py-2 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-dark transition-colors duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
