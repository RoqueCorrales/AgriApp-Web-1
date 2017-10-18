REG.initializeEvents = function () {
  if (document.getElementById('addUserButton')) {
    document.getElementById('addUserButton').addEventListener('click', function () {


      if (REG.completeFields(document.getElementById('contrasenna').value, document.getElementById('usuario').value)) {

        if (REG.confirmPassword(document.getElementById('contrasenna').value, document.getElementById('ccontrasenna').value)) {

          //  var fileInput = document.getElementById ("foto");
          var id = REG.creatorID();
          var user = {
            idUsuario: id,
            usuario: document.getElementById('usuario').value,
            contrasena: document.getElementById('contrasenna').value,
            telefono: document.getElementById('telefono').value,
            correo: document.getElementById('correo').value,
            direccion: document.getElementById('direccion').value,
            meGusta: 0,
            noMeGusta: 0,
            // foto =fileInput,

          };
          REG.addUser(user);
          REG.cleanFields();
          window.location.href = "login.html";
        } else {
          alert("Contrasena erronea.")
        }

      } else {
        alert("Campos sin llenar.")
      }
    });
  }


};
REG.initializeEvents();
