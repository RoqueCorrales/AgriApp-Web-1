function addEvents() {
  var button = document.getElementById("addProduct");
  button.addEventListener("click", registerProduct);




  var btnReturn = document.getElementById("btnregresar");
  btnReturn.addEventListener("click", goBack)
}



addEvents();

function goBack() {
  location.href = "Perfil.html";
}

function registerProduct() {
  var productos = [];
  var idUserActive = sessionStorage.getItem('useractive');
if((document.getElementById('nombre').value == "" )||(document.getElementById('nombre').value == null )){
alert("Producto incompleto")
}else{


  var product = {
    idUser: idUserActive,
    name: document.getElementById('nombre').value.toLowerCase(),
    category: document.getElementById('categoria').value,
    description: document.getElementById('descripcion').value,
    price: document.getElementById('precio').value,

  };

  if (localStorage.getItem('products')) {
    productos = JSON.parse(localStorage.getItem('products'));
  }

  productos.push(product);

  localStorage.setItem('products', JSON.stringify(productos));





  location.href = "Perfil.html";
}
}