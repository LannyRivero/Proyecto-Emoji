
export function initializeHoverAndClickEvents(elements) {
    elements.forEach((element) => {
        let isHidden = false;

        element.addEventListener('click', (event) => {
            if (!isHidden) {
                element.classList.add('fade-out');
                isHidden = true;
            } else {
                element.classList.remove('fade-out');
                isHidden = false;
            }

            event.stopPropagation(); // Evita que el clic se propague si es necesario
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const containerItems = document.querySelectorAll('.card'); 
    initializeHoverAndClickEvents(containerItems); // Usa el nombre correcto de la función
});
