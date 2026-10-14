function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorios = [];
    let tamanio = recuperarInt("txtTamanio");

    if (tamanio >= 5 && tamanio <= 20) {
        for (let i = 0; i < tamanio; i++) {
            console.log("Iteración índice: " + i); 
            let numeroGenerado = obtenerNumeroAleatorio(); 
            aleatorios.push(numeroGenerado); 
        }
        mostrarResultados(aleatorios);
    } else {
        alert("Por favor, ingrese un número válido entre 5 y 20.");
    }
}

function mostrarResultados(arregloNumeros) {
    let tabla = "<table border='1' style='border-collapse: collapse; text-align: center;'>";
    tabla += "<tr><th style='padding: 8px;'>Índice</th><th style='padding: 8px;'>Valor Aleatorio</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += "<tr>";
        tabla += "<td style='padding: 8px;'>" + i + "</td>";
        tabla += "<td style='padding: 8px;'>" + arregloNumeros[i] + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    document.getElementById("divTabla").innerHTML = tabla;
}