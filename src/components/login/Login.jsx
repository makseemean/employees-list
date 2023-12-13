import { useState } from 'react';

import './login.css';

const Login = ({ onLogin }) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === '12345') {
         onLogin(true);
      } else {
         alert('Invalid username or password');
      }
   };

   return (
      <div className="login">
         <form className="login__form" onSubmit={handleSubmit}>
            <div>Hello! Use your admin data for login.</div>
            <input
               type="text"
               name="login"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               className='login__input'
               placeholder='Input admin login...'
            />
            <input
               type="password"
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className='login__input'
               placeholder='Input admin password...'
            />
            <button className='login__btn' type="submit">Sign In</button>
         </form>
      </div>
   );
};

export default Login;
