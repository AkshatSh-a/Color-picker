document.getElementById('colorInput').addEventListener('input', function() {
    const color = this.value;
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');

    colorDisplay.style.backgroundColor = color;
    colorCode.textContent = color;

    // Change the background color of the entire page
    document.body.style.backgroundColor = color;
});
