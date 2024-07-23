window.addEventListener('load', function() {
    const popup = document.getElementById('popup-message');
    
popup.classList.add('show');
    

    setTimeout(function() {
        popup.classList.remove('show');
        popup.classList.add('hide');
    }, 10000); 
    
    popup.addEventListener('transitionend', function() {
        if (popup.classList.contains('hide')) {
            popup.style.display = 'none';
        }
    });
});



const backToTopBtn = document.getElementById("backToTopBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}


backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


function calcularValor(element) {
    const productItem = element.closest('.product-item');
    const precoPorUnidade = parseFloat(productItem.getAttribute('data-preco'));
    const quantidade = productItem.querySelector('.quantidade').value;
    const valorTotal = quantidade * precoPorUnidade;

    productItem.querySelector('.valorTotal').innerText = valorTotal.toFixed(2);

    const produto = productItem.getAttribute('data-produto');
    const mensagem = `Olá, gostaria de pedir ${quantidade} unidade(s) de ${produto}. Valor total: R$ ${valorTotal.toFixed(2)}`;
    const link = `https://wa.me/556194634810?text=${encodeURIComponent(mensagem)}`;

    productItem.querySelector('.whatsappLink').setAttribute('href', link);
}

function incrementar(button) {
    const quantidadeInput = button.closest('.product-item').querySelector('.quantidade');
    quantidadeInput.value = parseInt(quantidadeInput.value) + 1;
    calcularValor(button);
}

function decrementar(button) {
    const quantidadeInput = button.closest('.product-item').querySelector('.quantidade');
    if (quantidadeInput.value > 0) {
        quantidadeInput.value = parseInt(quantidadeInput.value) - 1;
        calcularValor(button);
    }
}

