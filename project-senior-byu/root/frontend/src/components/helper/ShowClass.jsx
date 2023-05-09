import React, {useState, useEffect} from 'react'

const ShowClass = () => {
    const [classes, setCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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
    </div>
  )
}

export default ShowClass