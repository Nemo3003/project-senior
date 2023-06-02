import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <FaExclamationCircle className="text-6xl text-red-500 mr-4" />
          <span className="text-xl">
            Please log in to access this page.
          </span>
        </div>
        <div className="mt-4 text-center border ">
          <Link to="/signin" className="text-blue-500">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
