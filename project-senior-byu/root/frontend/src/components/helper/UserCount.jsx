import { useState, useEffect } from "react";
import axios from "axios";

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('https://ocacoplus.onrender.com/users/count')
      .then(response => {
        setUserCount(response.data.total_users);
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
    <p className="text-4xl font-bold">{userCount}</p>
    </div>
  );
};

export default UserCount;
