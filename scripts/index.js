// JAVIER GARCÍA
// https://github.com/Javigarciagr7/EjercicioExamen-Rectangulo.git

// Primero, que se cargue todo el HTML y el CSS.
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");
    const resultContainer2 = document.getElementById("result2");

    calculateButton.addEventListener("click",  () => {
        // Largo
        const length = parseFloat(document.getElementById("length").value);
        // Ancho
        const width = parseFloat(document.getElementById("width").value);

        /**
         *  Si el valor del largo es un número válido Y el valor del ancho es un número válido.
         */
        if (!isNaN(length) && !isNaN(width)) {
            // Multiplicamos largo por ancho y obtenemos el área.
            const area = length * width;
            const perimetro = 2 * (length + width);
            // Añadimos el resultado al div que tenemos en el template.
            //Nos vamos acostumbrando a la plantilla literal o template literal.
            resultContainer.innerHTML = `El área del rectángulo es: ${area}`;
            resultContainer2.innerHTML = `Perimetro del rectangulo es: ${perimetro}`;
        } else {
            resultContainer.innerHTML = "Por favor, ingrese valores válidos.";
        }
    });
});
