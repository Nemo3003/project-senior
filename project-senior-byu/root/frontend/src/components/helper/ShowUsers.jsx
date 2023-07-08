import { useState, useEffect } from "react";
import axios from "axios";

const ShowUsers = () => {
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedUsersId, setSelectedUsersId] = useState('');

  useEffect(() => {
    fetch('https://backend-production-2960.up.railway.app/see-students')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  const enroll = () => {
    if (selectedUsersId) {
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
        {students.length > 0 ? (
          <>
          <select
            id="classId"
            value={selectedUsersId}
            onChange={(e) => setSelectedUsersId(e.target.value)}
          >
            <option value="">Select a student</option>
            {students.map((user) => (
              <option key={user.id} value={user.id}>
                {user.users_id}. {user.username}
              </option>
            ))}
          </select>
            
            
          </>
        ) : (
          <p className="text-sm text-gray-500">No users available.</p>
        )}
      </div>
    </div>
  );
};

export default ShowUsers;
