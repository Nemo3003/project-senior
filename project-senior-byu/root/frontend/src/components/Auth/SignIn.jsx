import { useState } from "react";
import jwt_decode from "jwt-decode";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8081/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        'Credentials': true,
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Get the JWT from the server response
        const jwt = data.jwt;
        // Decode the JWT to get the user data
        const user = jwt_decode(jwt);
        // Store the JWT in local storage for future API calls
        localStorage.setItem('jwt', jwt);
        // Redirect the user to the courses page
        window.location.href = '/courses';
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-md shadow-md">
        <div className="mb-6">
          <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
          <input 
            id="email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="block w-full border-gray-400 p-2 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium text-gray-700 mb-2">Password</label>
          <input 
            id="password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="block w-full border-gray-400 p-2 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
