//Un campo de entrada <input> permite escribir un nombre.
//Un botón "Añadir" que ejecuta la función agregarAmigo() al hacer clic.

/*Una lista <ul> con id="listaAmigos" para mostrar los nombres ingresados.
Otra lista <ul> con id="resultado" que probablemente mostrará los resultados del sorteo.*/

//Un botón con onclick="sortearAmigo()" que activa la función para realizar el sorteo.

let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (listaAmigos.length === 0) {
        resultado.innerHTML = `<li><strong>Ya no hay amigos disponibles</strong></li>`;

        // Crear botones de Reiniciar y Salir
        const opciones = document.createElement("div");
        opciones.innerHTML = `
            <button onclick="reiniciarSorteo()">🔄 Reiniciar</button>
            <button onclick="salir()">🚪 Salir</button>
        `;

        resultado.appendChild(opciones);
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos.splice(indiceAleatorio, 1)[0]; // Extrae y elimina el nombre

    resultado.innerHTML = `<li><strong> Amigo Secreto: ${amigoSorteado} </strong></li>`;
    actualizarLista();
}

function reiniciarSorteo() {
    listaAmigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

function salir() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>Hasta luego, gracias por utilizar este software 🥹😊</strong></li>`;

    // Limpiar la lista y deshabilitar el botón de sorteo
    listaAmigos = [];
    actualizarLista();
}
