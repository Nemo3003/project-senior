import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [name, setName] =  useState('')
  const navigate = useNavigate(name)
  useEffect(() => {
    axios.get('http://localhost:8081/home', {
      credentials: 'include',
    })
    .then( res => {
      if(res.data.Login==true){
        console.log(res.data.Login)
        setName(res.data.username)
      }else{
        navigate('/test')
      }
    })
    .catch(err =>console.log(err))
  })
  return (
    <div>
      <h1>Welcome! {name}</h1>
    </div>
  )
    
}

export default Home;
