import React, { useState, useEffect } from 'react';
import ShowClass from '../helper/ShowClass';
import axios from 'axios';

function RegisterClass() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      cardNumber,
      cardName,
      expiryMonth,
      expiryYear,
      cvc,
      selectedClass,
    };
    axios.post('https://backend-production-2960.up.railway.app/signup', formData)
      .then(response => {
        console.log(response.data);
        window.location.href = '/test';
        // handle response data as needed
      })
      .catch(error => {
        console.error(error);
        // handle error as needed
      });
  };

  return (
    <div className="container mx-auto max-w-md">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Username:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <h2 className="text-3xl font-bold mb-6">Class chosen</h2>
          <div>
            <ShowClass/>
          </div>
          <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Enter class number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="selectedClass"
          type="text"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          placeholder="Enter class number"
        />
      </div>
          
          <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => window.location.href = 'https://mpago.la/2T3rCNL'}
          >
            Proceed to checkout
          </button>
          </div>
          </form>
          
          </div>
          );
          }
          
          export default RegisterClass;
