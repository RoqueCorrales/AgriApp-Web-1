var REG = {


    initialize: function () {

    },




    addUser: function (user) {

        // agregarlo a localStorage
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));


    },

    cleanFields: function () {
        document.getElementById('usuario').value = "";
        document.getElementById('contrasenna').value = "";
        document.getElementById('ccontrasenna').value = "";
        document.getElementById('telefono').value = "";
        document.getElementById('correo').value = "";
        document.getElementById('direccion').value = "";

    },

    confirmPassword: function (pass1, pass2) {

        if (pass1 === pass2) {
            return true;
        }
        return false;

    },
    completeFields: function (usuario, pass) {


        if (usuario === "" || pass === "") {
            return false;
        }
        return true;
    },

    creatorID: function () {
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));


        }
        var id = users.length + 2;
        return id;

    }




};