cambiarModoBoton.addEventListener("click", cambiarModo);

function cambiarModo() {
  let todosContra = document.querySelectorAll("[type=password]");
  let todosText = document.querySelectorAll("[type=text]");
  for (let contra of todosContra) {
    contra.setAttribute("type", "text");
  }
  for (let text of todosText) {
    text.setAttribute("type", "password");
  }
}
cambiarModo();
