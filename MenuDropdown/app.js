const navegacion = document.querySelector('.navegacion');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    navegacion.classList.toggle('active');
}