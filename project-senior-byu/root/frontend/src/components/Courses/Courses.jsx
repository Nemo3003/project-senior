import { useState, useEffect } from "react";
import axios from "axios";

const Courses = () => {
  const [classes, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [userId, setUserId] = useState('');

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

  const enroll = () => {
    if (selectedClassId) {
      // Redirect to enroll form
      window.location.href = `/signup`;
    }
  };

  const EnrollButton = ({ classId }) => {
    return (
      <button onClick={() => window.location.href = `/signup`}>Enroll in class</button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        {errorMessage && (
          <div className="mb-4 bg-red-100 text-red-900 border border-red-400 rounded-md py-3 px-4">
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}
        {classes.length > 0 ? (
          <>
            <label htmlFor="classId">Select a class:</label>
            <select id="classId" value={selectedClassId} onChange={(e) => setSelectedClassId(e.target.value)}>
              <option value="">Select a class</option>
              {classes.map((course) => (
                <option key={course.id} value={course.id}>{course.className}</option>
              ))}
            </select>
            <br />
            <button onClick={enroll} disabled={!selectedClassId}>Enroll in class</button>
            <br />
            <br />
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classes.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.classes_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.className}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.classDescription}</td>
                    <td><EnrollButton classId={course.id} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-sm text-gray-500">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
