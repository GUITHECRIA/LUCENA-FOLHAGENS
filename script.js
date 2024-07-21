window.addEventListener('load', function() {
    const popup = document.getElementById('popup-message');
    
    // Show the popup
    popup.classList.add('show');
    
    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.classList.remove('show');
        popup.classList.add('hide');
    }, 10000); // 3000 milliseconds = 3 seconds
    
    // Remove the popup from the DOM after the transition ends
    popup.addEventListener('transitionend', function() {
        if (popup.classList.contains('hide')) {
            popup.style.display = 'none';
        }
    });
});
