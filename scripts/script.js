function togglePregunta() {
    const preguntas = document.querySelectorAll(".faq-pregunta");

    preguntas.forEach((pregunta) => {
        pregunta.addEventListener("click", () => {
            const item = pregunta.parentElement;
            const respuesta = item.querySelector(".faq-respuesta");

            item.classList.toggle("activo");

            if (item.classList.contains("activo")) {
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            } else {
                respuesta.style.maxHeight = "0";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    togglePregunta();
});
