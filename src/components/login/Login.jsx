import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);
    } catch{
      setError(true)
    }
  }
  return ( 
    <div className="container">
      <span className="user">{user.name}</span>
      <form className="loginForm">
        <input type="text" 
          placeholder="username" 
          value={username} 
          onChange={e=> setUsername(e.target.value)} 
          />
        <input 
          type="password" 
          placeholder="password" 
          value={password} 
          onChange={e=> setPassword(e.target.value)} 
          /> 
        <button disabled={!username || !password} onClick={handleClick}>
         {loading ? "please wait" :  "Login" }
        </button>


        <span data-testid="error" style={{visibility:error ? "visible" : "hidden"}}>Something went wrong!</span>
      </form>
    </div>
  );
};

export default Login;