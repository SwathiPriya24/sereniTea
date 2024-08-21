import React, { useState } from 'react';
import googleimg from '../images/google.png'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import RememberMeCheckbox from './RememberMeCheckbox';
import ForgotPasswordForm from './ForgotPasswordForm';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
    setUsername('');
    setPassword('');
  };
  const handleRememberMeChange = (value) => {
    setRememberMe(value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className=" container login pt-4">
      <div className="login-container py-2">

        <form onSubmit={handleLogin}>
          <h2 className='conthead text-center py-4'>Login to your Account</h2>
          <div className='btnlogin py-2 text-center'>
            <a >
              <Link to="/"><img src={googleimg} /> Continue with Google</Link>
            </a>
          </div>

         
          <div className="form-group py-2">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="remfor">
              <RememberMeCheckbox rememberMe={rememberMe} onChange={handleRememberMeChange} />
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <button className='btnlogin' type="submit">
            <Link to="/Cart">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;








































// import React from 'react'
// import googleimg from '../images/google.png'

// const Login = () => {
//   return (
//     <>
//       <div className="container text-center">
//         <div className="row px-0">
//           <div className="col login px-0 py-4">
//             <h3>Login to your Account</h3>

//             <p> <img src={googleimg} /> Continue with Google</p>

//             <p>-----or Sign in with Email----- </p>

//             <label htmlFor="Email">Email </label><br />
//             <input type="text" placeholder='Email' /> <br />
//             <label htmlFor="Password">Password </label><br />
//             <input type="text" placeholder='**********' /><br />
//             <div className="remfor">
//               <p>Remember me</p>
//               <p>forgot Password ?</p>
//             </div>
//             <button className='loginbtn'>LOG IN</button> <br />
//             <p className='logintxt'>Not Registered Yet ? <a className='logintxt' href="#"> Create an Account</a></p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login;