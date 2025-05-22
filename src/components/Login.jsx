import React, { useState } from 'react';
import '../styles/Login.css'; // Estilos personalizados
import { loginUser } from '../services/services';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = await loginUser(username, password);
      
      // Mostrar SweetAlert de éxito
      await Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: 'Bienvenido a tu banca electrónica',
        icon: 'success',
        confirmButtonText: 'Continuar'
      });

      // Redirigir después de cerrar el alert
      navigate('/seguridad', { state: { usuario: userData } });

    } catch (err) {
      setError(err.message);

      // Mostrar SweetAlert de error
      Swal.fire({
        title: 'Error',
        text: 'Credenciales incorrectas',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Banca Electrónica</h1>
      </header>

      <div className="login-main">
        <div className="login-description">
          <div className="text-center">
            <i className="bi bi-bank icon-bank mb-3"></i>
            <h3>Bienvenido al Banco de David</h3>
            <p>
              Accede de manera segura a todos tus productos financieros. Nuestra banca electrónica te permite consultar saldos, realizar transferencias y mucho más, desde cualquier lugar.
            </p>
          </div>
        </div>

        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <div><h3 className="login-title">Login</h3></div>
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
            <button type="submit" className="btn btn-success w-100">Ingresar</button>

            {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}

            <div className="mt-3 text-center w-100">
              <a className="small text-decoration-none">¿Olvidaste tu usuario o contraseña?</a><br />
              <a className="small text-decoration-none">Activar Banca Electrónica</a>
            </div>

            <footer className="mt-4 d-flex justify-content-center w-100">
              <a className="mx-2 text-secondary" title="Ayuda">
                <i className="bi bi-question-circle"></i>
              </a>
              <a className="mx-2 text-secondary" title="Seguridad">
                <i className="bi bi-shield-lock"></i>
              </a>
              <a className="mx-2 text-secondary" title="Contacto">
                <i className="bi bi-telephone"></i>
              </a>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;