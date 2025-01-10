
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let lastClickedCard = null; // Para rastrear la última tarjeta clicada

    // Agregar evento de clic a todas las tarjetas
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (lastClickedCard) {
                
                // Hacer reaparecer la tarjeta previamente oculta
                lastClickedCard.style.visibility = 'visible';
                lastClickedCard.style.opacity = '1';
            }

            // Si la tarjeta clicada no está oculta, ocultarla
            if (card.style.visibility !== 'hidden') {
                card.style.visibility = 'hidden';
                card.style.opacity = '0';
            }

            // Guardar la tarjeta actual como la última clicada
            lastClickedCard = card;
        });
    });      
});