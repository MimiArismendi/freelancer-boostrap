/*
 * Archivo principal de JS
 */
 var modal = document.getElementById('fondoModal');
 var img = document.getElementsByClassName('img');
 var imgPortafolio = document.getElementById("img01");
 var borrar = document.getElementsByClassName("cerrar")[0];
 borrar.addEventListener("click", cerrar);

 for(i=0; i< img.length; i++){
   img[i].addEventListener("click", popUp);
 }
 function popUp(){
     modal.style.display = "block";
     imgPortafolio.src = this.src;
 }
 function cerrar() {
     modal.style.display = "none";
 }
