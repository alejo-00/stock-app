//ELEMENTOS DEL DOM
const btnMenu = document.getElementById("btn-menu");
const listMenu = document.getElementById("list-menu");
const btnAgregar = document.getElementById("btn-agregar-producto");
const btnModificar = document.getElementById("btn-modificar-producto");
const btnEliminar = document.getElementById("btn-eliminar-producto");
const tabla = document.getElementById("miTabla");

//FUNCIONES
//mostrarMenu: Esta función muestra u oculta el menú de opciones al hacer clic en el botón de menú.
const mostrarMenu = () => {
  if (listMenu.hasAttribute("hidden")) {
    listMenu.removeAttribute("hidden");
  }
  else {
    listMenu.setAttribute("hidden", "");
  };
};

//armarTabla: Esta función arma la tabla con los datos de los productos.
const armarTabla = (tabla) => {
  $(tabla).DataTable({
    autoWidth: false,
    columnDefs: [
      // { width: '50px', targets: 0 },
      // { width: '50px', targets: 1 }
    ],
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página",
      zeroRecords: "No se encontraron resultados",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros totales",
      infoEmpty: "Mostrando 0 a 0 de 0 registros totales",
      infoFiltered: "(filtrado de _MAX_ registros en total)",
      search: "Buscar:",
      paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior"
      }
    },
    initComplete: function () {
      $('#dt-search-0').attr('placeholder', 'Ingrese el producto');
    }
  });
};

//READY
$(document).ready(function() {
    console.log("Ready!");
    armarTabla(tabla);
    btnMenu.addEventListener("click", mostrarMenu);
  });