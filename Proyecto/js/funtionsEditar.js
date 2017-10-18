function addEvents(){
 disableFields();


 	var button = document.getElementById("confirmar");
	button.addEventListener("click", confirmPassword);

    
 	var buttonA = document.getElementById("actualizar");
	buttonA.addEventListener("click", updateUser);

var buttonR= document.getElementById("regresar");
	buttonR.addEventListener("click", regresar);

}
addEvents();

function  disableFields(){
      var idUserActive = sessionStorage.getItem('useractive');

    document.getElementById("idUsuario").innerHTML = idUserActive;
      document.getElementById('usuario').disabled = true;
         document.getElementById('contrasenna').disabled = true;
            document.getElementById('ccontrasenna').disabled = true;
            document.getElementById('telefono').disabled = true;
             document.getElementById('correo').disabled = true;
          document.getElementById('direccion').disabled = true;
            document.getElementById('actualizar').hidden = true;


}

function confirmPassword(){
   

    var idUserActive = sessionStorage.getItem('useractive');

  
     users = JSON.parse(localStorage.getItem('users'));
     var usuaro;
for (var i = 0; i < users.length; i++) {
			if(idUserActive==users[i].idUsuario){
             usuaro= users[i];
            }
        }
 var oldPass = document.getElementById("contrasennaantigua").value;
	
		if( oldPass == usuaro.contrasena){
            document.getElementById("contrasennaantigua").hidden = true;
            document.getElementById('usuario').disabled = false;
         document.getElementById('contrasenna').disabled = false;
            document.getElementById('ccontrasenna').disabled = false;
            document.getElementById('telefono').disabled = false;
             document.getElementById('correo').disabled = false;
          document.getElementById('direccion').disabled = false;

fillFields();
 document.getElementById('confirmar').hidden = true;
 document.getElementById('actualizar').hidden = false;


	
	}else{
    	alert("Contrase&ntilde;a erronea.");
    }
}


function fillFields(){
    var idUserActive = sessionStorage.getItem('useractive');
     users = JSON.parse(localStorage.getItem('users'));

for (var i = 0; i < users.length; i++) {
			if(idUserActive==users[i].idUsuario){
                 document.getElementById('usuario').value=users[i].usuario;
          // document.getElementById('contrasenna').value="";
             // document.getElementById('ccontrasenna').value="";
            document.getElementById('telefono').value=users[i].telefono;
             document.getElementById('correo').value=users[i].correo;
          document.getElementById('direccion').value=users[i].direccion;
            }
}


}
function updateUser(){
     var idUserActive = sessionStorage.getItem('useractive');
     users = JSON.parse(localStorage.getItem('users'));
if(document.getElementById('contrasenna').value==document.getElementById('ccontrasenna').value ){
     for (var i = 0; i < users.length; i++) {
         if((idUserActive==users[i].idUsuario)){

                 users[i].usuario = document.getElementById('usuario').value;
                 users[i].contrasena =document.getElementById('contrasenna').value;
                 users[i].telefono = document.getElementById('telefono').value;
                 users[i].correo = document.getElementById('correo').value;
                 users[i].direccion = document.getElementById('direccion').value;

                 


         }
        }
         localStorage.setItem('users', JSON.stringify(users));
         alert("Actualizacion Completa");
         location.href ="Perfil.html";

     }else{
              alert("Error");
         }




     
}

function regresar(){
    location.href = "Perfil.html";
}