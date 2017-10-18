	function addEvents() {

	      var btnBuscar = document.getElementById("btnBuscar");
	      btnBuscar.addEventListener("click", addBuscar);
	}


	addEvents();


	function addBuscar() {
	      var products = [];
	      products = JSON.parse(localStorage.getItem('products'));
	      var producto = sessionStorage.getItem('productoBuscado');
	      var myProducts = [];
	      sessionStorage.removeItem("productoBuscado");
	      if (products == null || document.getElementById('producto').value == "") {
	            alert("No se encontraron datos");
	            document.getElementById('producto').value = "";
	      } else {
	            sessionStorage.setItem('productoBuscado', document.getElementById('producto').value.toLowerCase());
	            location.href = "BuscarProducto.html";
	      }






	}