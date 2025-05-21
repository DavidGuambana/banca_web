import React, { useEffect, useState } from 'react';
import { getIcons, API_BASE_URL } from '../services/services';
import '../styles/Seguridad.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Seguridad() {
  const navigate = useNavigate();
  const location = useLocation();
  const usuario = location.state?.usuario || null;

  const [respuesta, setRespuesta] = useState('');
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);
  const [iconos, setIconos] = useState([]);

  useEffect(() => {
    async function cargarIconos() {
      try {
        const datos = await getIcons();
        // Barajar el array (shuffle)
        const mezclados = datos
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        setIconos(mezclados);
      } catch {
        // Ignorar errores
      }
    }
    cargarIconos();
  }, [usuario]);

  if (!usuario) {
    return <div className="container mt-4">Usuario no proporcionado.</div>;
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    const respuestaCorrecta = usuario.verificacion.respuesta;
    const idIconoCorrecto = usuario.verificacion.icono.idIcono;

    if (
      respuesta.trim().toLowerCase() === respuestaCorrecta.trim().toLowerCase() &&
      iconoSeleccionado?.idIcono === idIconoCorrecto
    ) {
      navigate('/cuenta', { state: { usuario: usuario } });
    } else {
      navigate('/login');
    }
  };

  const manejarClickIcono = (icono) => {
    setIconoSeleccionado(icono);
  };

  return (
    <div className="container mt-4">
      <h2>Validación de seguridad</h2>

      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Pregunta de seguridad:</label>
          <input
            type="text"
            className="form-control"
            value={usuario.verificacion.pregunta.pregunta}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tu respuesta:</label>
          <input
            type="text"
            className="form-control"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Validar</button>
      </form>

      <hr />

      <h4 className="mt-4">Selecciona tu ícono de seguridad</h4>

      <div className="d-flex flex-wrap gap-3 mt-3">
        {iconos.length > 0 ? (
          iconos.map((icono) => (
            <div
              key={icono.idIcono}
              className={`card-icono ${
                iconoSeleccionado?.idIcono === icono.idIcono ? 'seleccionado' : ''
              }`}
              onClick={() => manejarClickIcono(icono)}
            >
              <img
                src={`${API_BASE_URL}/files/${icono.idImg}`}
                alt={icono.nombreIcono}
              />
              <div className="nombre-icono">{icono.nombreIcono}</div>
            </div>
          ))
        ) : (
          <p>No hay íconos para mostrar.</p>
        )}
      </div>
    </div>
  );
}

export default Seguridad;

