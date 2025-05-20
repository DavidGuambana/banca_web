import React, { useState } from 'react';
import '../styles/Login.css'; // Estilos personalizados
import { loginUser } from '../services/services';

function Login() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = await loginUser(username, password);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    console.log(user);
    return <div className="text-center mt-5">Bienvenido, {user.username}!</div>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-white login-form">
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        {error && <div className="mt-3 alert alert-danger text-center">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
