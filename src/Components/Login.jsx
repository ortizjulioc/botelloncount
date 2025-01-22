import React, { useState } from "react";
import Imagen from "../assets/fotoGrande.jpg";
import ImageProfile from "../assets/usuario.png";
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

const auth = getAuth(appFirebase);

const Login = () => {
    const [resgistrando, setRegistrando] = useState(null);

    const functAuntenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;

        // Validación del formato del correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (resgistrando) {
            // Registro
            try {
                await createUserWithEmailAndPassword(auth, correo, contrasena);
                alert("Cuenta creada exitosamente.");
            } catch (error) {
                console.log(error.code)
                if (error.code === "auth/email-already-in-use") {
                    alert("El correo ya está registrado. Intenta iniciar sesión.");
                } else if (error.code === "auth/weak-password") {
                    alert("La contraseña debe tener al menos 8 caracteres.");
                } else if (error.code === "auth/missing-password") {
                    alert("La contrasena no puede estar en blanco.");
                }
                else {
                    alert("Ocurrió un error: " + error.message);
                }
            }
        } else {
            // Inicio de sesión
            try {
                await signInWithEmailAndPassword(auth, correo, contrasena);
               // alert("Inicio de sesión exitoso.");
            } catch (error) {
                console.log(error.code)
                if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential" || error.code=== "auth/missing-password") {
                    alert("El correo o la contraseña no son correctos.");
                } else {
                    alert("Ocurrió un error: " + error.message);
                }
            }
        }
    };

    return (
        <div className="container">
            {/* Header con estilo */}
            <header className="header">
                <h1 className="header-title">BotellonCount</h1>
            </header>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className="estilo-profile" />
                            <form onSubmit={functAuntenticacion}>
                                <input type="text" placeholder="Ingresar Email" className="cajatexto" id="email" />
                                <input type="password" placeholder="Ingresar contraseña" className="cajatexto" id="password" />
                                <button className="btnform">{resgistrando ? "Regístrate" : "Inicia Sesión"}</button>
                            </form>
                            <h4 className="texto">
                                {resgistrando ? "Si ya tienes cuenta  " : "¿No tienes cuenta?  "}
                                <button className="btnswitc" onClick={() => setRegistrando(!resgistrando)}>
                                    {resgistrando ? "Inicia sesión" : "Regístrate"}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Imagen} alt="" className="tamano-imagen" />
                </div>
            </div>
        </div>
    );
};

export default Login;
