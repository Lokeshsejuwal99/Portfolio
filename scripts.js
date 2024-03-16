document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.style.backgroundColor;
            document.body.style.backgroundColor = color;
            updateTextColor(color);
        });
    });

    function updateTextColor(bgColor) {
        let textColor;
        if (bgColor === 'rgb(255, 255, 255)' || bgColor === '#ffffff') {
            textColor = 'hwb(130 0% 30%)'; // Set text color to black for white background
        } else {
            textColor = '#fff'; // Set text color to white for other background colors
        }
        document.documentElement.style.setProperty('--text-color', textColor);
        document.querySelectorAll('*').forEach(element => {
            element.style.color = textColor;
        });
    }

});
