import { useState } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState({});
  const [login, isLogin] = useState(false);
  const [invalid, isInvalid] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.username == "user" && data.password == "password"){
      isLogin(true);
    }else{
      isInvalid(true);
    }
  }

  const handleChange = (e) => {
    
    let value = e.target.value;
    setData({
      ...data,
      [e.target.name]:value,
    })
  }

  return ( 
        <form action="submit" onSubmit={handleSubmit}>
          <h1>Login Page</h1>
            {login ? (
              <div>
                <p>Welcome, user!</p>
              </div>
            ) : invalid ? (
              <div>
                <p>Invalid username or password</p>
              </div>
            ) : (
            <div>
              <div>
                <label htmlFor="username">Username:<input type="text" name="username" id="username" required onChange={handleChange} /></label>
              </div>
              <div>
                <label htmlFor="password">Password:<input type="text" name="password" id="password" required onChange={handleChange} /></label>  
              </div>
              <button type='submit'>Submit</button>
            </div>
            )}
        </form>
  )
}


