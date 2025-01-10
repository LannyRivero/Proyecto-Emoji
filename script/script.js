
function addHoverAndClickActions(elements) {
    elements.forEach((element) => {
        let isHidden = false;
        
        element.addEventListener('mouseenter', () => {
            if (!isHidden) {
                element.classList.add('fade-out');  
                isHidden = true;  
            }
        });
        
        element.addEventListener('click', (event) => {
            if (isHidden) {
                element.classList.remove('fade-out'); 
                isHidden = false; 
                event.stopPropagation(); 
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const containerItems = document.querySelectorAll('.card'); 
    addHoverAndClickActions(containerItems);  
});