let imagen = document.querySelector("#imagen");
let botonEncriptar = document.querySelector("#btn-encriptar");
let resultado = document.querySelector("#texto-resultado");
let textoUsuario = document.querySelector("#texto-usuario");
let botonDesencriptar = document.querySelector("#btn-desencriptar");
let botonCopiar = document.querySelector("#btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar


function encriptar() {
    var frase = textoUsuario.value.toLowerCase();
    var letras = frase.split("");

    for (var i=0; i< letras.length; i++) {
        switch (letras[i]){
            case "a":
                 letras[i]= "ai";
                 break;
            case "e":
                letras[i]= "enter";
                break;
            case "i":
                letras[i]= "imes";
                break;
            case "o":
                letras[i]= "ober";
                break;
            case "u":
                letras[i]= "ufat";
                break;
        }
    }
    resultado.innerHTML = letras.join("");
    botonDesencriptar.disabled = false;
    botonCopiar.disabled = false;
    botonEncriptar.disabled = true;
}

function desencriptar() {
    var frase = textoUsuario.value.toLowerCase();
    var textoDesencriptado = "";

    textoDesencriptado = frase.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    resultado.innerHTML = textoDesencriptado;
    botonEncriptar.disabled = false;
    botonDesencriptar.disabled = true;
    botonCopiar.disabled = true;
    textoUsuario.value = "";
}

function copiar() {
    textoUsuario.value = resultado.textContent;
}