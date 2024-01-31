document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Adjust the scroll speed by changing the value of 'scrollAmount'
    const scrollAmount = 5;

    // Scroll horizontally on mouse wheel event
    container.addEventListener('wheel', function (event) {
        container.scrollLeft += (event.deltaY / Math.abs(event.deltaY)) * scrollAmount;
        event.preventDefault();
    });
});