import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const [auth, setAuth] = useState(false);

    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    useEffect(() => {
      axios
        .get('http://localhost:8081/courses')
        .then(res => {
          console.log(res.data.Status)
          if (res.data.Status === "Success") {
            setAuth(true);
            navigate('/');
          } else {
            setAuth(false);
            setMessage(res.data.Error);
          }
        })
        .catch(err => {
          console.warn(err);
        });
    }, []);
    const handleLogout = () => {
      // Perform logout logic here
      setAuth(false);
      // Clear the token from local storage or session storage
      localStorage.removeItem('token');
      // Redirect the user to the login page or any other desired route
      navigate('/login');
    };
    
    
    return (
      <div className='container mt-4'>
        {auth ? (
          <div>
            <h3>You are Authorized</h3>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        ) : message ? (
          <div>
            <h3>{message}</h3>
            <h3>Login Now</h3>
            <Link to="/login" className='btn btn-primary'>Login</Link>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
    
}

export default Home;
