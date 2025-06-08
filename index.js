precio = 400000;
var cantidad = 0;

precioSpan = document.querySelector(".precio-base");
precioSpan.innerHTML = precio;
totalSpan = document.querySelector(".valor-total");

function actualizarTotal() {
  valorFinal = precio * cantidad;
  totalSpan.innerHTML = valorFinal;
}

function agregar() {
  cantidad = cantidad + 1;
  document.getElementById("cantidad").innerHTML = cantidad;
  actualizarTotal();
}

function quitar() {
  if (cantidad > 0) {
    cantidad = cantidad - 1;
    document.getElementById("cantidad").innerHTML = cantidad;
    actualizarTotal();
  }
}
