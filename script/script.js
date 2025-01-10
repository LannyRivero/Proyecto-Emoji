
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let lastClickedCard = null; 

    
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (lastClickedCard) {              
                
                lastClickedCard.style.visibility = 'visible';
                lastClickedCard.style.opacity = '1';
            }

            if (card.style.visibility !== 'hidden') {
                card.style.visibility = 'hidden';
                card.style.opacity = '0';
            }

            
            lastClickedCard = card;
        });
    });      
});