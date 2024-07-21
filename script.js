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
// Obtém o botão
const backToTopBtn = document.getElementById("backToTopBtn");

// Quando o usuário rola a página 20px para baixo, mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Quando o usuário clica no botão, rola até o topo da página
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
