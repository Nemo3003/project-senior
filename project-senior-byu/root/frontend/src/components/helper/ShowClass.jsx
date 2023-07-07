import { useState, useEffect } from "react";
import axios from "axios";

const ShowClass = () => {
  const [classes, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetch('https://ocacoplus-server.onrender.com/courses')
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
          <select
            id="classId"
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            <option value="">Select a class</option>
            {classes.map((course) => (
              <option key={course.id} value={course.id}>
                {course.classes_id}. {course.className}
              </option>
            ))}
          </select>
            
            
          </>
        ) : (
          <p className="text-sm text-gray-500">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default ShowClass;
