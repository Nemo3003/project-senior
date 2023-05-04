import { useState, useEffect } from "react";
import axios from "axios";

const Courses = () => {
  const [classes, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, classId] = useState('')

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

  const enroll = (classId, userId) => {
    axios.post('/enroll', { classId, userId })
      .then(response => {
        console.log('Enrolled successfully');
        // Refresh the courses list after enrolling
        fetch('http://localhost:8081/enroll')
          .then(res => res.json())
          .then(data => {
            setCourses(data);
          })
          .catch(error => {
            setErrorMessage(error.message);
          });
      })
      .catch(err => {
        console.log('Failed to enroll');
      });
  };

  const EnrollButton = ({ classId, userId }) => {
    return (
      <button onClick={() => enroll(classId, userId)}>Enroll in class</button>
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
                <tr key={course.classes_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.class_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.class_description}</td>
                  <td><EnrollButton classId={course.classes_id} userId={userId} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-sm text-gray-500">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
