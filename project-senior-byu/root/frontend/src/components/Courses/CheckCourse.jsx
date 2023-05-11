import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function CheckCourse() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Upload Proof of Payment</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="mb-4">
          <span className="bg-white px-4 py-2 rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-red-400">
            <FontAwesomeIcon icon={faUpload} className="w-6 h-6 inline-block mr-2" />
            {file ? file.name : 'Choose a file'}
          </span>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        <button
          type="submit"
          disabled={!file}
          className="bg-blue text-black px-4 py-2 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-dark transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckCourse;
