function addEvents() {

    fillData();

}
addEvents();

function fillData() {

    var idUserActive = sessionStorage.getItem('useractive');
    mensajes = JSON.parse(localStorage.getItem('mensajes'));

    var table = document.getElementById("tableMensajes");
    table.innerHTML = null;

    for (var i = 0; i < mensajes.length; i++) {
        if (idUserActive == mensajes[i].idUsuario) {
            var row = "<tr name=\"" + idUserActive + "\"><td>" + mensajes[i].texto + "</td></tr>";
            table.innerHTML = table.innerHTML + row;

        }

    }
    seleccion();
}

function seleccion() {

    var table = document.getElementById("tableMensajes");
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function () {
            return function () {


                var mensaje = this.cells[0].innerHTML;


                if (confirm("Esta seguro que quiere eliminar este mensaje?") == true) {
                    deleteMensaje(mensaje);
                } else {

                }
            }
        })(i);
    }
}

function deleteMensaje(mensaje) {
    var mensajes = JSON.parse(localStorage.getItem('mensajes'));
    var idUserActive = sessionStorage.getItem('useractive');
    var listaMensajes = [];

    for (var i = 0; i < mensajes.length; i++) {
        if ((idUserActive == mensajes[i].idUsuario) && (mensaje == mensajes[i].texto)) {

            alert("Eliminado exitoso.")

        } else {
            listaMensajes.push(mensajes[i]);
        }



    }
    localStorage.setItem('mensajes', JSON.stringify(listaMensajes));
    location.reload();










}