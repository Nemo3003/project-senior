
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';
import UserCount from '../helper/UserCount';
import UserCountEn from '../helper/UserCountEn';
import { UserContext } from '../Auth/UserContext';
import { Bar } from 'react-chartjs-2';

const AdminDashboard = () => {

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
              <h2 className="text-lg font-medium mb-2">Number of processed docs</h2>
              <UserCountEn />
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Students Enrolled</h2>
              <UserCountEn />
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Number of Successful Payments</h2>
              <UserCountEn />
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

    </div>
  );
};

export default AdminDashboard;
