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
    <div className="cuenta-container">
      {/* Perfil: ocupa todo el ancho */}
      <div className="perfil-card">
        <div className="perfil-avatar">
          {usuario.nombreCompleto.charAt(0)}
        </div>
        <div className="perfil-info">
          <h2 className="perfil-nombre">{usuario.nombreCompleto}</h2>
          <p className="perfil-username">@{usuario.username}</p>
          <p className="perfil-email">{usuario.email}</p>
          <p className="perfil-fecha">Registrado: {new Date(usuario.fechaRegistro).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Cuentas: cards con flecha para ver más */}
      <h3 className="cuentas-titulo">Tus Cuentas</h3>
      <div className="cuentas-grid">
        {usuario.cuentas.map((cuenta) => {
          const isOpen = expanded === cuenta.idCuenta;
          return (
            <div key={cuenta.idCuenta} className="cuenta-card">
              <div className="cuenta-header" onClick={() => toggleExpand(cuenta.idCuenta)}>
                <div>
                  <p className="cuenta-label">Número de Cuenta</p>
                  <h4 className="cuenta-numero">{cuenta.numeroCuenta}</h4>
                </div>
                <div className="flecha">
                  {isOpen ? '▼' : '▶'}
                </div>
              </div>
              {isOpen && (
                <div className="cuenta-detalle">
                  <p><strong>Tipo:</strong> {cuenta.tipoCuenta}</p>
                  <p><strong>Saldo:</strong> ${cuenta.saldo.toFixed(2)}</p>
                  <p><strong>Creada:</strong> {new Date(cuenta.fechaCreacion).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
