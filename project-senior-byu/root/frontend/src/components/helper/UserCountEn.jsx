import { useState, useEffect } from "react";
import axios from "axios";

const UserCountEn = () => {
  const [userCountu, setUserCountu] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('https://backend-production-2960.up.railway.app/users/counten')
      .then(response => {
        setUserCountu(response.data.total_usersu);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      {errorMessage && (
        <div className="bg-red-100 text-red-900 border border-red-400 rounded-md py-3 px-4 mb-4">
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}
    <p className="text-4xl font-bold">{userCountu}</p>
    </div>
  );
};

export default UserCountEn;
