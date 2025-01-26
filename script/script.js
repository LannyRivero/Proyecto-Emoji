
function handleHover(element) {
    if (!element.classList.contains('fade-out')) {
        element.classList.add('fade-out');
    }
}

function handleClick(element, event) {
    if (element.classList.contains('fade-out')) {
        element.classList.remove('fade-out');
        event.stopPropagation();
    }
}

function addHoverAndClickActions(elements) {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => handleHover(element));
        element.addEventListener('click', event => handleClick(element, event));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const containerItems = document.querySelectorAll('.card');
    addHoverAndClickActions(containerItems);
});
