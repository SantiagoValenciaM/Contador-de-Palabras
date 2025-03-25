const fs = require('fs');

// Función para contar palabras en un archivo
function contarPalabras(archivo) {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Dividir el texto en palabras usando una expresión regular
        const palabras = data.match(/\b\w+\b/g); //No captura palabras con guiones o apostrofes 
        const cantidad = palabras ? palabras.length : 0;

        console.log(`El archivo "${archivo}" tiene ${cantidad} palabras.`);
    });
}

// Llamar a la función con el nombre del archivo
contarPalabras('archivo.txt');