//login de usuario con ejemplo
let nombreUsuario = "tutor a cargo";
let contraseñaUsuario = "coderhouse";
let ingreso = false;

let usuario = prompt("Ingrese su nombre de usuario.");
if (usuario==nombreUsuario){
    for (let i=2; i>=0;i--){
        let contraseña = prompt ("Ingrese su contraseña.");
        if (contraseña==contraseñaUsuario){
            alert("Login exitoso");
            ingreso = true;
            break
        } else{
            alert("Contraseña incorrecta. Tiene "+i+" intentos restante")
        }
    }
}else{
    alert("Nombre de usuario no registrado.")
}

//menu de aplicacion web
if(ingreso){
    let opcion = prompt ("Seleccione una opcion: \n1. Vuelo Internacional. \n2. Vuelo Nacional. \n3. Crucero. \n4. Salir del menú.");
    while (opcion != "4" && opcion != "cuatro"){
        switch (opcion){
            case "1": let pasajein = parseInt(prompt("El precio del Vuelo Internacional es: USD 1000 \n ¿Cuantos pasajes desea comprar?"))
                alert("El precio final es de: USD "+costovuelo(pasajein,opcion));
                break
            case "2": let pasajena = parseInt(prompt("El precio del Vuelo Nacional es: USD 100 \n ¿Cuantos pasajes desea comprar?"))
                alert("El precio final es de: USD "+costovuelo(pasajena,opcion));
                break
            case "3": let pasajecr = parseInt(prompt("El precio del Crucero es: USD 1200 \n ¿Cuantos pasajes desea comprar?"))
                alert("El precio final es de: USD "+costovuelo(pasajecr,opcion));
                break
        }
        opcion = prompt ("Seleccione una opcion: \n1. Vuelo Internacional. \n2. Vuelo Nacional. \n3. Crucero. \n4. Salir del menú.");
    }
}
alert("Muchas gracias "+nombreUsuario+" por visitar nuestra página")

function costovuelo(pasaje,vuelo){
    if (vuelo == 1){
        return pasaje*1000;
    }
    if (vuelo == 2){
        return pasaje*100;
    }
    if (vuelo == 3){
        return pasaje*1200;
    }
}


