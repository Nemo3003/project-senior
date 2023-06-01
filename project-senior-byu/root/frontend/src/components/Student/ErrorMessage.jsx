import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <FaExclamationCircle className="text-6xl text-red-500 mr-4" />
          <span className="text-xl">
               "Please log in to access this page."
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
