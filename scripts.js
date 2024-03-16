document.addEventListener('DOMContentLoaded', function() {
 const colorOptions = document.querySelectorAll('.color-option');

 colorOptions.forEach(option => {
     option.addEventListener('click', function() {
         const color = this.style.backgroundColor;
         document.body.style.backgroundColor = color;
     });
 });
});
