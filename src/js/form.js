//Variables
let form=document.getElementById("form")
let pedidos=document.getElementById("pedidos")
let login=document.getElementById("login")
let user=document.getElementById("usuario")
let pass=document.getElementById("password")

import {validatePasswordModerate,validateUsername} from "./validate.js";

//Funciones
const logear =(event) =>{
    let valido=true;
    event.preventDefault();

    if(validatePasswordModerate(pass.value)){
        console.log("Contraseña Correcta")
    }else{
        valido=false
        
    }

    if(validateUsername(user.value)){
        console.log("Usuario correcto")
    }else{
        valido=false
    }

    if(valido){
        
        login.style.display="none"
        pedidos.style.display="block"
        
    }
}


//Listener
form.addEventListener("submit",logear)