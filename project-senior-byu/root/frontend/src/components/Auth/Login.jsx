
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate('/signin') }>Get to the login</button>
    </div>
  );
}

export default Login;
