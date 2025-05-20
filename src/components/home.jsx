import React from 'react'
import '../styles/home.css'; // Estilos personalizados
import { useNavigate } from 'react-router-dom';



function home() {
  const navigate = useNavigate();

  const handlePersonClick = () => {
    navigate('/login');
  };
  return (
    <div className="home-container">
  {/* Encabezado */}
 <header className="home-header d-flex justify-content-between align-items-center px-4 py-3">
  <h3 className="mb-0">Bienvenido al Banco de David</h3>

  <div className="search-box position-relative">
    <input
      type="text"
      className="form-control ps-3 pe-5 rounded-pill border-success"
      placeholder="Buscar..."
    />
    <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-success"></i>
  </div>
</header>


  {/* Cuerpo principal */}
  <div className="main-content d-flex">
    {/* Texto lado izquierdo */}
    <div className="text-section">
      <h1 className="main-title">TRANQUILO, PÁGUELO CON</h1>
      <p className="main-subtitle">VISA BANCO DE DAVID O EN BANCA ELECTRÓNICA</p>
    </div>

    {/* Tarjeta lado derecho */}
    <div className="floating-card shadow-lg">
     <div className="d-flex align-items-center mb-4">
  <i className="bi bi-bank2 me-2"></i>
  <h5 className="card-title mb-0">Banca Electrónica</h5>
</div>
     <button className="btn btn-outline-light w-100 d-flex align-items-center justify-content-start mb-2"onClick={handlePersonClick}>
    <i className="bi bi-person-fill me-2"></i> Personas
  </button>

  <button className="btn btn-outline-light w-100 d-flex align-items-center justify-content-start">
    <i className="bi bi-building me-2"></i> Empresas
  </button>
    </div>
  </div>
</div>
  )
}

export default home