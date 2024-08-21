const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado) {
    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrixCodigo.length; i++) {
        if(stringEncriptado.includes(matrixCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptado
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrixCodigo.length; i++) {
        if(stringDesencriptado.includes(matrixCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    }
    return stringDesencriptado
}


document.querySelector('.btn-copiar').addEventListener('click', function() {
    const mensaje = document.querySelector('.mensaje');
    const textToCopy = mensaje.value;
    
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    } else {
        alert('No hay texto para copiar');
    }
});