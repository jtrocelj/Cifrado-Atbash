const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const tamano = alfabeto.length - 1;

var boton = document.getElementById("cifrar");

document.getElementById("entrada").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
}, true);

boton.addEventListener("click", () => {
    salida.innerHTML = cifrar(entrada.value);
});


function cifrar(entrada) {
    let texto = entrada.toUpperCase();
    let salidaTexto = '';

    for(let i = 0; i < texto.length; i++) {
        salidaTexto += alfabeto[tamano - alfabeto.indexOf(texto[i])] ;
    }
    return salidaTexto;
}
function limpiar() {
    document.getElementById("entrada").value = "";
}
