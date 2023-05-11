import React, { useState, useEffect } from 'react';
import ShowClass from '../helper/ShowClass';
import ShowUsers from '../helper/ShowUsers';
import AdminNav from './AdminNav';
import axios from 'axios';

function AddUsClass() {
    const [usersId, setUsersId] =  useState('');
    const [classId, setClassId] =  useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            usersId,
            classId
        };
    axios.post ('http://localhost:8081/setclass', formData)
        .then(response => {
            console.log(response.data);
            window.location.href = '/setclass'
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <>
        <AdminNav/>
        
        <div className="container mx-auto max-w-md">
            
            <div class="flex gap-4">
            <div class="w-1/2">
                <ShowClass />
            </div>
            <div class="w-1/2">
                <ShowUsers />
            </div>
        </div>

            <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4'
            >
                <div className="mb-4">
                    <label htmlFor="usersId" className="block text-gray-800 font-bold mb-2">
                        User ID
                    </label>
                    <input 
                    type="text"
                    id='usersId'
                    value={usersId}
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    placeholder='Enter user ID'
                    onChange={(e) => setUsersId(e.target.value)}
                    required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="usersId" className="block text-gray-800 font-bold mb-2">
                        Class ID
                    </label>
                    <input 
                    type="text"
                    id='usersId'
                    value={classId}
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    placeholder='Enter class ID'
                    onChange={(e) => setClassId(e.target.value)}
                    required 
                    />
                </div>
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Link them!
                </button>
            </form>
        </div>
        </>
    )
}
          
export default AddUsClass;
