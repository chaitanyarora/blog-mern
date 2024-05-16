import React, {useState} from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(ev) {
    ev.preventDefault();
    
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password})
    })
  }

  return (
    <div>
        <form className='login' onSubmit={login}>
        <h1>Login</h1>
          <input type="text" placeholder='username' value={username} onChange={ev => setUsername(ev.target.value)} />
          <input type="password" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)} />
          <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage