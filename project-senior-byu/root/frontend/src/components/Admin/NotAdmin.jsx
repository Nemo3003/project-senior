import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const NotAdmin = ({ isLoggedIn }) => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <FaExclamationCircle className="text-6xl text-red-500 mr-4" />
          <span className="text-xl">Your credentials have not being validated
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotAdmin;
