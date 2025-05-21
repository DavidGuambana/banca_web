import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Cuenta.css';

export default function Cuenta() {
  const location = useLocation();
  const usuario = location.state?.usuario;
  const [expanded, setExpanded] = useState(null);

  if (!usuario) {
    return <div className="cuenta-container">Usuario no proporcionado.</div>;
  }

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="banco-container">
      <header className="banco-header">
        <h1>Banco de  David y Ariel - Posición Consolidada</h1>
      </header>

      <div className="banco-content">
        <nav className="banco-menu">
          <ul>
            <li>Posición Consolidada</li>
            <li>Campañas</li>
            <li>Cuentas</li>
            <li>Créditos</li>
            <li>VISA Banco de Loja</li>
            <li>Consultas</li>
            <li>Transferencias</li>
            <li>Pago y compra de servicios</li>
            <li>Servicios bancarios</li>
            <li>Personalización</li>
            <li>Contáctenos</li>
          </ul>
        </nav>

        <main className="banco-main">
          <section className="usuario-info">
            <div className="perfil-card">
              <div className="perfil-avatar">{usuario.nombreCompleto.charAt(0)}</div>
              <div className="perfil-info">
                <h2 className="perfil-nombre">{usuario.nombreCompleto}</h2>
                <p className="perfil-username">Username: {usuario.username}</p>
                <p className="perfil-email">Correo: {usuario.email}</p>
                <p className="perfil-fecha">
                  Registrado: {new Date(usuario.fechaRegistro).toLocaleDateString()}
                </p>
                <p className="perfil-estado">
        Estado: {usuario.estado ? '✅ Activo' : '❌ Inactivo'}
      </p>
              </div>
            </div>
          </section>

          <section className="cuentas-container">
            <h3 className="cuentas-titulo">Tus Cuentas</h3>
            <table className="cuentas-tabla">
              <thead>
                <tr>
                  <th>Número de Cuenta</th>
                  <th>Tipo</th>
                  <th>Saldo</th>
                  <th>Fecha de Creación</th>
                </tr>
              </thead>
              <tbody>
                {usuario.cuentas.map((cuenta) => (
                  <tr key={cuenta.idCuenta}>
                    <td>{cuenta.numeroCuenta}</td>
                    <td>{cuenta.tipoCuenta}</td>
                    <td>${cuenta.saldo.toFixed(2)}</td>
                    <td>{new Date(cuenta.fechaCreacion).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
