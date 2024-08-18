// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let buttonsEl = document.querySelectorAll('.botao-expandir-retrair');
buttonsEl.forEach(function(buttonEl){
    buttonEl.addEventListener('click', function(){
        let pEl = buttonEl.parentElement;
        pEl.classList.toggle('expandido');
    });
});