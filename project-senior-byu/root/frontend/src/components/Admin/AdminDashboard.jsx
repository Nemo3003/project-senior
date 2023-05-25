
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';
import UserCount from '../helper/UserCount';
import { UserContext } from '../Auth/UserContext';


const AdminDashboard = () => {
  const [numSignups, setNumSignups] = useState(256);
  const [numDocsUploaded, setNumDocsUploaded] = useState(128);
  const [numChatbotResponses, setNumChatbotResponses] = useState(512);
  const [numSuccessfulPayments, setNumSuccessfulPayments] = useState(64);
  const [classes, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { isAdmin, setIsAdmin } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:8081/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="bg-white shadow">
        <AdminNav />
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Signups</h2>
              <UserCount />
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
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              {errorMessage && (
                <div className="mb-4 bg-red-100 text-red-900 border border-red-400 rounded-md py-3 px-4">
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              {classes.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {classes.map((course) => (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.className}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.classDescription}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-sm text-gray-500">No courses available.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h1>Admin Dashboard</h1>
        <p>isAdmin: {isAdmin.toString()}</p>
        <button onClick={() => setIsAdmin(false)}>Set isAdmin to false</button>
        <button onClick={() => setIsAdmin(true)}>Set isAdmin to true</button>
      </footer>
    </div>
  );
};

export default AdminDashboard;
