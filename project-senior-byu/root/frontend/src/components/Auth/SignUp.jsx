import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

useNavigate

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username, email, password };
    fetch('http://localhost:8081/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // handle response data as needed
      })
      .then(res=>{
        if(res.data.Status === 'Success'){
          window.history.href='/test'
        }else{
          alert('Error')
        }
      })
      .catch(error => {
        console.error(error);
        // handle error as needed
      });
  };

  return (
        <div className="container mx-auto max-w-md">
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
    <div className="flex items-center justify-between">
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        >
        Sign up
        </button>
    </div>
    <Link to="/test">Already have an account?</Link>
    </form>
    
    </div>
  );
}

export default SignUp;