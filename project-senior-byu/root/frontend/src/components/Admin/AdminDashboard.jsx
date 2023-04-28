import React, { useState } from 'react';

const AdminDashboard = () => {
    const [numSignups, setNumSignups] = useState(256);
    const [numDocsUploaded, setNumDocsUploaded] = useState(128);
    const [numChatbotResponses, setNumChatbotResponses] = useState(512);
    const [numSuccessfulPayments, setNumSuccessfulPayments] = useState(64);

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="bg-white shadow">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10.971 0L9.03 2.8l3.72 3.2H1v3h11.751l-3.72 3.199 1.94 2.8L20 10l-7.089-10z"
              />
            </svg>
            <span className="font-semibold text-xl tracking-tight">Admin Dashboard</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
      <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Signups</h2>
              <p className="text-4xl font-bold">{numSignups}</p>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Docs Uploaded</h2>
              <p className="text-4xl font-bold">{numDocsUploaded}</p>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Chatbot Responses</h2>
              <p className="text-4xl font-bold">{numChatbotResponses}</p>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Successful Payments</h2>
              <p className="text-4xl font-bold">{numSuccessfulPayments}</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Classes</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              <li className="border-b border-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  Math
                </div>
                <div className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  Math class description goes here.
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-900"
                  >
                    Edit
                  </a>
                </div>
              </li>
              <li className="border-b border-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  Science
                </div>
                <div className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  Science class description goes here.
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-900"
                  >
                    Edit
                  </a>
                </div>
              </li>
              <li className="border-b border-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  History
                </div>
                <div className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  History class description goes here.
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-900"
                  >
                    Edit
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
