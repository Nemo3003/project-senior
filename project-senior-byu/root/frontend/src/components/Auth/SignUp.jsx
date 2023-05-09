import React, { useState, useEffect } from 'react';
import ShowClass from '../helper/ShowClass';
import axios from 'axios';

function SignUp() {
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
    axios.post('http://localhost:8081/signup', formData)
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
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
      <h2 className="text-3xl font-bold mb-6">Payment Information</h2>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cardNumber"
          type="text"
          placeholder="**** **** **** **"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="cardName">
          Name on Card
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cardName"
          type="text"
          placeholder="John Doe"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryMonth">
            Expiry Month
            </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expiryMonth"
            type="text"
            placeholder="MM"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            required
          />
          </div>
          <div className="w-1/2 ml-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryYear">
            Expiry Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expiryYear"
            type="text"
            placeholder="YYYY"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            required
          />
          </div>
          </div>
          <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cvc">
            CVC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cvc"
            type="text"
            placeholder="*"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
          />
          </div>
          <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="selectedClass">
            Select a Class:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="selectedClass"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
          <option value="">-- Select a class --</option>
          {classes.map((course) => (
            <option key={course.id} value={course.id}>{course.className}</option>
            ))}
           </select>
          </div>
          <div className="flex items-center justify-between">
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-nonefocus:shadow-outline"
          type="submit"
          >
          Enroll Now
          </button>

          </div>
          </form>
          );
          }
          
          export default SignUp;
