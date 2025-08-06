//ELEMENTOS DEL DOM
const tabla = document.getElementById("miTabla");

$(document).ready(function() {
    console.log("Document is ready!");
    $(tabla).DataTable();
  });