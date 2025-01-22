import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css"; // Archivo CSS para el diseño

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    return (
        <div className="container">
            {/* Encabezado */}
            <header className="home-header">
                <h2>
                    Bienvenido, Usuario <span className="user-email">{correoUsuario}</span>
                </h2>
                <button className="btn btn-primary logout-btn" onClick={() => signOut(auth)}>
                    Logout
                </button>
            </header>

            {/* Formulario para registrar un aporte */}
            <div className="card shadow-lg aporte-card">
                <div className="card-body">
                    <h3 className="card-title">Registrar Aporte</h3>
                    <form>
                        {/* Campo para el aporte en dinero */}
                        <div className="mb-3">
                            <label htmlFor="aporte" className="form-label">Aporte (en dinero)</label>
                            <input
                                type="number"
                                id="aporte"
                                className="form-control"
                                placeholder="Ingresa la cantidad en dinero..."
                                min="0"
                                step="0.01"
                            />
                        </div>

                        {/* Campo para la fecha */}
                        <div className="mb-3">
                            <label htmlFor="fecha" className="form-label">Fecha</label>
                            <input
                                type="date"
                                id="fecha"
                                className="form-control"
                            />
                        </div>

                        {/* Menú desplegable para seleccionar quién hizo el aporte */}
                        <div className="mb-3">
                            <label htmlFor="autor" className="form-label">Autor del Aporte</label>
                            <select id="autor" className="form-select">
                                <option value="">Selecciona un autor</option>
                                <option value="usuario1">Usuario 1</option>
                                <option value="usuario2">Usuario 2</option>
                                <option value="usuario3">Usuario 3</option>
                            </select>
                        </div>

                        {/* Botón para enviar el formulario */}
                        <button type="submit" className="btn btn-success w-100">
                            Guardar Aporte
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
