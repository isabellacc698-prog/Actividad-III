// 1. Evento click
document.getElementById("boton").addEventListener("click", function() {
    alert("Bienvenido a la historia de Nix");
});


// 2. Evento mouseover
document.getElementById("titulo").addEventListener("mouseover", function() {
    this.style.color = "#0066cc";
});


// 3. Evento mouseout
document.getElementById("titulo").addEventListener("mouseout", function() {
    this.style.color = "#12304a";
});


// 4. Evento submit
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente");
});


// 5. Evento dblclick
document.getElementById("imagen").addEventListener("dblclick", function() {
    alert("Has hecho doble clic en la imagen de Nix");
});