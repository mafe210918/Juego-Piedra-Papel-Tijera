function jugar(opcionUsuario) {

    opcionUsuario = opcionUsuario.toLowerCase();

    const opciones = ["piedra", "papel", "tijera"];
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (opcionUsuario === opcionComputadora) {
        resultado = "empate"; // cambiar a minúscula para controlar mejor
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
        resultado = "ganaste";
    } else {
        resultado = "perdiste";
    }

    const resultadoElemento = document.getElementById("resultado");

    // Limpiar clases previas
    resultadoElemento.classList.remove("ganaste", "perdiste", "empate");

    // Agregar clase según resultado
    resultadoElemento.classList.add(resultado);

    // Mostrar texto completo
    let texto = "";
    if (resultado === "ganaste") texto = "¡Ganaste! 🎉";
    else if (resultado === "perdiste") texto = "Perdiste 😢";
    else texto = "Empate 😐";

    resultadoElemento.innerText =
        "Tú elegiste " + opcionUsuario +
        " | La computadora eligió " + opcionComputadora +
        " → " + texto;

    // Animación
    resultadoElemento.classList.remove("mostrar");
    setTimeout(() => {
        resultadoElemento.classList.add("mostrar");
    }, 10);
}