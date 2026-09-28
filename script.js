const field = document.getElementById("field");
const card = document.getElementById("card");
const cerrar = document.getElementById("cerrar");
const musica = document.getElementById("musica");

// CREAR 45 FLORES
for (let i = 0; i < 45; i++) {

    const flower = document.createElement("div");

    flower.classList.add("sunflower");

    flower.innerHTML = "🌹🌷";

    // POSICIÓN
    const x = 5 + Math.random() * 90;
    const y = 5 + Math.random() * 90;

    flower.style.left = x + "%";
    flower.style.top = y + "%";

    // TAMAÑO
    const tipo = Math.random();

    let size;

    if (tipo < 0.35) {

        // PEQUEÑA
        size = 0.45 + Math.random() * 0.20;

    } else if (tipo < 0.75) {

        // MEDIANA
        size = 0.75 + Math.random() * 0.25;

    } else {

        // GRANDE
        size = 1.15 + Math.random() * 0.45;

    }

    flower.style.setProperty("--size", size);

    // MOVIMIENTO
    const velocidad = 2 + Math.random() * 3;

    flower.style.animationDuration = velocidad + "s";


    // =========================
    // AL DAR CLIC A LA FLOR
    // =========================

    flower.addEventListener("click", function () {

        // 🎵 REPRODUCIR MÚSICA
        musica.play();

        // 💌 MOSTRAR CARTA
        card.classList.add("mostrar");

    });


    field.appendChild(flower);
}


// =========================
// CERRAR CARTA
// =========================

cerrar.addEventListener("click", function () {

    card.classList.remove("mostrar");

    // 🎵 LA MÚSICA NO SE DETIENE

});