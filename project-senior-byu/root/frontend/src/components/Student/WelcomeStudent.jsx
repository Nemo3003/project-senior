import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WelcomeStudent = () => {
  const studentName = "John Doe";
  const classCount = 5;
  
  return (
    <div className="flex items-center justify-center h-[50vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Welcome!
        </h1>
        <div className="flex items-center justify-center">
          <FaUserGraduate className="text-6xl text-blue-500 mr-4" />
          <span className="text-xl text-gray-700">
            You are part of our student community and we missed you!
          </span>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/auth-class"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            To Classes!
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">If you have any questions or need assistance, feel free to reach out to our support team.</p>
          <p className="text-gray-600">Email: support@example.com</p>
          <p className="text-gray-600">Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStudent;
