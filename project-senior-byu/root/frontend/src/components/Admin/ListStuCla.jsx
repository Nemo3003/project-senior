import { useState, useEffect } from "react";
import AdminNav from "./AdminNav";

const ListStuCla = () => {
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('https://ocacoplus.onrender.com/stuclass')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <>
      <AdminNav/>
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
        <div className="px-4 py-6 sm:px-0">
          {errorMessage && (
            <div className="mb-4 bg-red-100 text-red-900 border border-red-400 rounded-md py-3 px-4">
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {students.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.username}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.className}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm text-gray-500">No students enrolled.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ListStuCla;
