import React, { useState } from 'react';
import axios from 'axios';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Send a POST request to the backend server to insert the form data into the MySQL database
    axios.post('/enroll', formData)
      .then((response) => {
        console.log('Enrollment submitted:', response.data);
        setFormData({ name: '', email: '', class: '' });
      })
      .catch((error) => {
        console.error('Error submitting enrollment:', error);
      });
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

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="border border-gray-400 rounded-md p-2 mb-2 w-full"
      />

      <label htmlFor="class">Select a Class:</label>
      <select
        id="class"
        name="class"
        value={formData.class}
        onChange={handleInputChange}
        required
        className="border border-gray-400 rounded-md p-2 mb-2 w-full"
      >
        <option value="">-- Select a Class --</option>
        <option value="math">Math</option>
        <option value="english">English</option>
        <option value="history">History</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">
        Enroll Now
      </button>
    </form>
  );
};

export default EnrollmentForm;
