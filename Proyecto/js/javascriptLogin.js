function addEvents() {
	var button = document.getElementById("logButton");
	button.addEventListener("click", verification);
}
addEvents();

function verification() {
	var userName = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	if (userName == "" || pass == "") {
		alert("Ingrese los datos.");
	} else {
		var users = JSON.parse(localStorage.getItem('users'));
		var element;

		for (var i = 0; i < users.length; i++) {
			element = users[i];
			if (userName == element.usuario) {
				if (pass == element.contrasena) {

					sessionStorage.setItem('useractive', users[i].idUsuario);

					location.href = "Perfil.html";
					break;
				} else {
					alert("Contraseña incorrecta.")
					break;
				}
			} else if (i == users.length - 1) {
				clearFileds();
				alert("Usuario " + userName + " no registrado.")
			}
		}
	}
}

function clearFileds() {
	document.getElementById("user").value = "";
	document.getElementById("pass").value = "";
}