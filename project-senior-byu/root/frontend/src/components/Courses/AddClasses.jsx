import React, {useState} from 'react'
import AdminNav from '../Admin/AdminNav';


const AddClasses = () => {
    const [className, setClassName] = useState('');
    const [classDescription, setClassDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const classData = {className, classDescription}
        fetch('http://localhost:8081/add-classes', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(classData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.error(e)
        })
    };
  return (
    <>
    <AdminNav/>
    
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
    <div className="px-4 py-6 sm:px-0">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="class-name" className="block text-sm font-medium text-gray-700">
            Class Name
          </label>
          <div className="mt-2 p-3 border shadow-md">
            <input
              id="className"
              name="className"
              type="text"
              required
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
            />
          </div>
        </div>
        <br /><br />
        <div className="border">
          <label htmlFor="class-description" className="block text-sm font-medium text-gray-700">
            Class Description
          </label>
          <div className="mt-1 shadow-md">
            <textarea
              id="classDescription"
              name="classDescription"
              rows="3"
              required
              value={classDescription}
              onChange={(e) => setClassDescription(e.target.value)}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-4"
            ></textarea>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-6 bg-red-100 text-red-900 border border-red-400 rounded-md py-3 px-4">
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <div className="mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Class
          </button>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default AddClasses