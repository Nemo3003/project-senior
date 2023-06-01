import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const WelcomeStudent = ({ studentName }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Welcome!
        </h1>
        <div className="flex items-center justify-center">
          <FaUserGraduate className="text-6xl text-blue-500 mr-4" />
          <span className="text-xl">
            You are  part of our student community and we missed you!.
          </span>
          <Link to="/auth-class">To classes!</Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStudent;
