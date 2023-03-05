let usuarioTXT = document.getElementById("Usuario");
let passwordTXT = document.getElementById("Contraseña");
let p = document.getElementById("mensaje");

function imprimirsesion(){
    console.log(usuarioTXT.value);
    p.innerHTML = "Login correcto, " + usuarioTXT.value;
}

function imprimirRegistro(){
    console.log(usuarioTXT.value);
    p.innerHTML = "Registro correcto, " + usuarioTXT.value;
}

function limpiar(){
   usuarioTXT.value = ""; 
   passwordTXT.value="";
   p.innerHTML = "";
}

function togglePsw(){
    passwordTXT.attributes = Text;
    alert(passwordTXT.value);
}
