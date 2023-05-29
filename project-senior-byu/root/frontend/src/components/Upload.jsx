import React, { useState } from 'react';

const Sh = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
        // Handle any additional logic or display success message
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle error or display error message
      });
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </form>
  );
};

export default Sh;
