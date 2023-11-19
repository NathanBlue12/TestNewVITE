import React, { useState } from 'react';

function LoginForm({ onClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    console.log('Button clicked!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'root' && password === 'root') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button type="submit" onClick={handleClick} disabled={!username || !password}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;