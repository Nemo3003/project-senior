import React, { useState } from 'react';
import axios from 'axios';

const ClassForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileInputChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, description, file } = formData;

    const formDataWithFile = new FormData();
    formDataWithFile.append('name', name);
    formDataWithFile.append('description', description);
    formDataWithFile.append('file', file);

    try {
      const response = await axios.post('/api/classes', formDataWithFile, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="border border-gray-400 rounded-md p-2 mb-2 w-full"
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
        className="border border-gray-400 rounded-md p-2 mb-2 w-full"
      />

      <label htmlFor="file">Upload a File:</label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleFileInputChange}
        required
        className="border border-gray-400 rounded-md p-2 mb-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">
        Upload
      </button>
    </form>
  );
};

export default ClassForm;
