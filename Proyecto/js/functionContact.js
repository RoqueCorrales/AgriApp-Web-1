function addEvents() {


    var btnReturn = document.getElementById("btnReturn");
    btnReturn.addEventListener("click", goBack);

    var btnProducto = document.getElementById("botonProducto");
    btnProducto.addEventListener("click", fillProducts);

    var btnInicio = document.getElementById("btninicio");
    btnInicio.addEventListener("click", goIndex);


    var btnConocenos = document.getElementById("btnconocenos");
    btnConocenos.addEventListener("click", goConocenos);

    var btnLike = document.getElementById("megusta");
    btnLike.addEventListener("click", like);


    var btnDislike = document.getElementById("nomegusta");
    btnDislike.addEventListener("click", dislike);

    var btnCalificar = document.getElementById("botonCalificar");
    btnCalificar.addEventListener("click", fillCalificar);

    var btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.addEventListener("click", enviarMensaje);


    fillProductsPrincipal();
    fillDataUser();
    hideB();



}

addEvents();

function fillProducts() {

    var products = [];
    products = JSON.parse(localStorage.getItem('products'));
    var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));
    productoor = productoSeleccionado.productor;
    var idProductor;

    var usuarios = JSON.parse(localStorage.getItem('users'));

    for (var c = 0; c < usuarios.length; c++) {
        if (productoor == usuarios[c].usuario) {
            idProductor = usuarios[c].idUsuario;
        }
    }




    var myProducts = [];

    for (var i = 0; i < products.length; i++) {

        if (products[i].idUser == idProductor) {
            myProducts.push(products[i]);

        }

    }

    var table = document.getElementById("tableProd");
    table.innerHTML = null;
    for (var i = 0; i < myProducts.length; i++) {
        var row = "<tr name=\"" + myProducts[i].name + "\"></td><td>" + myProducts[i].name +
            "</td><td>" + myProducts[i].category + "</td><td>" + myProducts[i].price + "</td><td>" +
            myProducts[i].description + "</td></tr>";
        table.innerHTML = table.innerHTML + row;


    }







}

function fillProductsPrincipal() {


    var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));


    var table = document.getElementById("tableProducts");
    table.innerHTML = null;

    var row = "<tr name=\"" + productoSeleccionado.productor + "\"></td><td>" + productoSeleccionado.producto + "</td><td>" + productoSeleccionado.calidad + "</td><td>" + productoSeleccionado.precio + "</td></tr>";
    table.innerHTML = table.innerHTML + row;




}


function fillDataUser() {
    var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));
    productoor = productoSeleccionado.productor;

    var usuarios = JSON.parse(localStorage.getItem('users'));

    for (var i = 0; i < usuarios.length; i++) {
        if (productoor == usuarios[i].usuario) {


            document.getElementById('username').innerHTML = usuarios[i].usuario;
            document.getElementById('phone').innerText = usuarios[i].telefono;
            document.getElementById('address').innerText = usuarios[i].direccion;
            document.getElementById('email').innerText = usuarios[i].correo;

        }
    }


}


function hideB() {

    var idUserActive = sessionStorage.getItem('useractive');
    if (idUserActive == null) {
        document.getElementById("btnReturn").style.display = 'none';
    } else {
        document.getElementById("btninicio").style.display = 'none';
        document.getElementById("btnconocenos").style.display = 'none';
    }

}

function goBack() {
    location.href = "Perfil.html";
}

function goIndex() {
    location.href = "index.html";
}

function goConocenos() {
    location.href = "Conocenos.html";
}


function like() {

    var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));
    productoor = productoSeleccionado.productor;

    var usuarios = JSON.parse(localStorage.getItem('users'));

    for (var i = 0; i < usuarios.length; i++) {
        if (productoor == usuarios[i].usuario) {


            usuarios[i].meGusta = usuarios[i].meGusta + 1;
            document.getElementById("megusta").style.display = 'none';
            document.getElementById("nomegusta").style.display = 'none';



        }

    }
    localStorage.setItem('users', JSON.stringify(usuarios));
    alert("Gracias por calificar a nuestro vendedor");

}

function dislike() {
    var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));
    productoor = productoSeleccionado.productor;

    var usuarios = JSON.parse(localStorage.getItem('users'));

    for (var i = 0; i < usuarios.length; i++) {
        if (productoor == usuarios[i].usuario) {


            usuarios[i].noMeGusta = usuarios[i].noMeGusta + 1;
            document.getElementById("nomegusta").style.display = 'none';
            document.getElementById("megusta").style.display = 'none';



        }

    }
    localStorage.setItem('users', JSON.stringify(usuarios));
    alert("Gracias por calificar a nuestro vendedor");

}


function fillCalificar() {

    var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));
    productoor = productoSeleccionado.productor;

    var usuarios = JSON.parse(localStorage.getItem('users'));

    for (var i = 0; i < usuarios.length; i++) {
        if (productoor == usuarios[i].usuario) {



            var table = document.getElementById("tableCalificacion");
            table.innerHTML = null;

            var row = "<tr name=\"" + productoor + "\"></td><td>" + usuarios[i].meGusta +
                "</td><td>" + usuarios[i].noMeGusta + "</td></tr>";
            table.innerHTML = table.innerHTML + row;




        }
    }
}


function enviarMensaje() {
    var mensajes = [];
    var data = document.getElementById("txtMensaje").value;
    if (data == "") {
        alert("Escribe mensaje ");
    } else {


        var idPro;
        var productoSeleccionado = JSON.parse(sessionStorage.getItem('selectedProduct'));
        productoor = productoSeleccionado.productor;

        var usuarios = JSON.parse(localStorage.getItem('users'));

        for (var i = 0; i < usuarios.length; i++) {
            if (productoor == usuarios[i].usuario) {
                idPro = usuarios[i].idUsuario;
            }



        }
        mensaje = {
            texto: data,
            idUsuario: idPro,
        }


        if (localStorage.getItem('mensajes')) {
            mensajes = JSON.parse(localStorage.getItem('mensajes'));
        }

        mensajes.push(mensaje);

        localStorage.setItem('mensajes', JSON.stringify(mensajes));
        alert("Mensaje enviado con exito.")
        document.getElementById("txtMensaje").value = "";

    }

}