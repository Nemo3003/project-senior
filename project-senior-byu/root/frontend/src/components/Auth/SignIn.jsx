import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';


function SignIn() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8081/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
        credentials: 'include',
      });
  
      if (!response.ok) {
        const data = await response.json();
        console.log("Response from backend:", data); // Log the response from the backend
        console.log(data.message);
      } else {
        const data = await response.json();
        console.log("Username:", data.name);
        console.log("Login status:", data.Login);
        console.log("Token:", data.token);
        console.log("isAdmin:", data.isAdmin);
        console.log('valid', data.valid);
        // Call the navigation function here, outside the if-else block
        navigate('/courses');
      }
  
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Successfully Logged in!',
      });
    } catch (err) {
      console.log("Error:", err);
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto max-w-md">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-md shadow-md">
        <div className="mb-6">
          <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
          <input 
            id="email"
            type="email"
            value={loginEmail}
            placeholder="example@example.com"
            required
            onChange={(e) => setLoginEmail(e.target.value)}
            className="block w-full border-gray-400 p-2 rounded-md shadow-md border focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium text-gray-700 mb-2">Password</label>
          <input 
            id="password"
            type="password"
            value={loginPassword}
            placeholder="*************"
            required
            onChange={(e) => setLoginPassword(e.target.value)}
            className= "block w-full border-gray-400 p-2 rounded-md shadow-md border focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Log in
          </button>
        </div>
        <Link to="/signup">Do not have an account?</Link>
      </form>
    </div>
  );
}

export default SignIn;