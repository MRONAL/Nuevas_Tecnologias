function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}
document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}
function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var tituloTexto = document.getElementById("tituloTexto").value; // Captura el texto ingresado

    if (tituloTexto.trim() === "") {
        alert("Por favor, ingresa un título.");
        return;
    }

    var titulo = document.createElement("h1");
    titulo.textContent = tituloTexto;
    contenido.appendChild(titulo);
}
function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var textoEnlace = document.getElementById("enlaceTexto").value;
    var urlEnlace = document.getElementById("enlaceURL").value;

    if (textoEnlace.trim() === "" || urlEnlace.trim() === "") {
        alert("Por favor, ingresa tanto el texto del enlace como la URL.");
        return;
    }

    var enlace = document.createElement("a");
    enlace.textContent = textoEnlace;
    enlace.setAttribute('href', urlEnlace);
    enlace.setAttribute('target', '_blank'); // Abre en nueva pestaña
    enlace.style.display = "block"; // Para que cada enlace esté en una línea nueva
    enlace.style.marginTop = "5px";
    
    contenido.appendChild(enlace);
}
