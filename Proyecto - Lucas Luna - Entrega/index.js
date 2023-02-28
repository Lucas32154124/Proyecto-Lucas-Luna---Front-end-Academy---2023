

function Registrardome(){
    let Registro_Nombre = document.querySelector(".nombre").value;
    let Registro_Mail = document.querySelector(".mail").value;
    let Registro_Pass = document.querySelector(".pass").value;
    
    alert("Hola "+Registro_Nombre+" bienvenido a FreeGames");
    alert("virus activado con exito");
}


function InicioSesion(){
    let InicioSesion_Mail = document.querySelector(".mail").value;
    let InicioSesion_Pass = document.querySelector(".pass").value;


    ///Si la informacion es valida
    if(InicioSesion_Mail == "admin@admin.com" && InicioSesion_Pass=="admin"){
        ///Ingresa a la pagina
        // alert("Bienvenido bro");
    }else{
        ///Sino, no tiene acceso a la pagina
        /*alert("Acceso denegado");*/
    }
}

function Vervideo( elemento ){
    document.querySelector(".Video").style.display="block";
    document.querySelector(".Video").src = elemento.id;
}






