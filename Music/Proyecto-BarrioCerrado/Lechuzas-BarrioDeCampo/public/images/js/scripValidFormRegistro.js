window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function(e){
        
        let errores = [];

        let campoNombre = document.querySelector("input.nombre");

        if(campoNombre.value == "") {
            errores.push("El campo de nombre tiene que estar completo");

        }else if (campoNombre.value.length < 3) {
            errores.push("El campo de nombre debe tener al menos 3 caracteres");
        }

        let campoApellido = document.querySelector("input.apellido");

if(campoApellido.value == "") {
    errores.push("El campo de apellido tiene que estar completo");

}else if (campoApellido.value.length < 3) {
    errores.push("El campo de apellido debe tener al menos 3 caracteres");
}

let campoDNI = document.querySelector("input.dni");

if(campoDni.value == "") {
    errores.push("El campo de Dni tiene que estar completo");

}else if (campoDni.value.length == 8) {                            //preguntar ??????????
    errores.push("El campo de Dni debe tener 8 caracteres");
}


let campoNumeroLote = document.querySelector("input.numero-Lote");

if(campoNumeroLote.value == "") {
    errores.push("El campo de Numero-Lote tiene que estar completo");

}else if (campoNumeroLote.value.length < 3) {
    errores.push("El campo de Numero-Lote debe tener al menos 3 caracteres");
}

let campoTelefono = document.querySelector("input.Telefono");

if(campoNumeroLote.value == "") {
    errores.push("El campo de Telefono tiene que estar completo");

}else if (campoTelefono.value.length < 15) {
    errores.push("El campo de Telefono debe tener al menos 15 caracteres"); // preguntar ??????????
}

let campoEmail = document.querySelector("input.email");

        if(campoEmail.value == "") {
            errores.push("El campo de email tiene que estar completo");
}

let contraReg = document.querySelector("input.password");
        let contadorPass = contraReg.value.replace(/[^0-9]/g,'').length;
        
        if (contadorPass < 3){
            errores.push("La contraseña tiene que tener 3 numeros como minimo")
} 
 // Falta confirmar password ////////////   
 
 // Falta validar imagen *** > 1 MB de tamaño no puede ser almacenada
      
        if (contraReg.value == ""){
                errores.push("Tiene que tener una contraseña")
}
        
if (errores.length > 0) {
    e.preventDefault();
    let urlRG = document.querySelector("div.erroresRG ul")

    for (let i = 0; i < errores.length ; i ++){
        urlRG.innerHTML += "<li>" + errores[i] + "</li>"
    }
    
alert("Por favor, ingrese bien la informacion")
}
});
})
