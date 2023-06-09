import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from '../Home'
import Notice from "./Notice";
import PaypalCheckoutButton from "./PaypalCheckout";


const AuthCourses = () => {
  const [classes, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetch('https://project-senior-production.up.railway.app/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  const EnrollButton = ({ classId }) => {
    return (
      
      <button onClick={() => window.location.href = `http://mpago.la/2a446Qx`}>Enroll in class</button>
    );
  };
  

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Home></Home>
      <Notice/>
      <div className="px-4 py-6 sm:px-0">
       
        {classes.length > 0 ? (
          <>
            <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Class Number
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Class Name
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Class Description
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {classes.map((course) => (
        <tr key={course.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.classes_id}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.className}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.classDescription}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <EnrollButton classId={course.id} />
            
          </td>
          
        </tr>
      ))}
      
    </tbody>
  </table>
</div>



            <Link to={`/check`} className="px-6 py-3 bg-blue text-gray-400 rounded-full shadow-lg hover:bg-blue-dark transition-colors duration-200 hover:text-red-400">
        I already have a ticket!
      </Link>

          </>
        ) : (
          <p className="text-sm text-gray-500">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default AuthCourses;
