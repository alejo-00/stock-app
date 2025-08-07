//ELEMENTOS DEL DOM
const btnMenu = document.getElementById("btn-menu");
const listMenu = document.getElementById("list-menu");
const btnAgregar = document.getElementById("btn-agregar-producto");
const btnModificar = document.getElementById("btn-modificar-producto");
const btnEliminar = document.getElementById("btn-eliminar-producto");
const tabla = document.getElementById("miTabla");

//FUNCIONES
const mostrarMenu = () => {
  if (listMenu.hasAttribute("hidden")) {
    listMenu.removeAttribute("hidden");
  }
  else {
    listMenu.setAttribute("hidden", "");
  };
};

//READY
$(document).ready(function() {
    console.log("Ready!");
    $(tabla).DataTable();
    btnMenu.addEventListener("click", mostrarMenu);
  });