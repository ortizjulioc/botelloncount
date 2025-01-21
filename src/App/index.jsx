import { useState } from 'react';

// modulos de firebase
import appFirebase from '../credenciales'
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";

//Componentes
import Login from "../Components/Login"
import Home  from "../Components/Home";

const auth = getAuth(appFirebase)
function App() {
const [usuario, setusuario] = useState(null)

onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
        setusuario(usuarioFirebase)
    }
    else{
        setusuario(null)
    }
})

return(
    <div>
        {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
    
)
}

export default App
