// exercicio 1
let inputNomeEl = document.querySelector('#input-nome');

inputNomeEl.addEventListener('input', (e) => {
    let pEl = document.querySelector('#avatar-nome');
    pEl.innerHTML = e.currentTarget.value;
});

// exercicio 2
let inputCorEl = document.querySelector('#input-cor');

inputCorEl.addEventListener('input', (e) => {
    let avatarCorpoEl = document.getElementById('avatar-corpo');
    let avatarCabecaEl = document.getElementById('avatar-cabeca');
    avatarCorpoEl.style.backgroundColor = e.currentTarget.value;
    avatarCabecaEl.style.backgroundColor = e.currentTarget.value;
});

// exercicio 3
let selectCabeloEl = document.querySelector('#select-cabelo');

selectCabeloEl.addEventListener('input', (e) => {
    let avatarCabeloEl = document.getElementById('avatar-cabelo');
    avatarCabeloEl.src = e.currentTarget.value;
})

// desafio 1
let selectExpressaoEl = document.querySelector('#select-expressao');

selectExpressaoEl.addEventListener('input', (e) => {
    let avatarExpressaoEl = document.getElementById('avatar-expressao');
    avatarExpressaoEl.src = e.currentTarget.value;
});

let checkboxEls = document.querySelectorAll('.checkbox-acessorio');

checkboxEls.forEach(checkbox => {
    checkbox.addEventListener('input', (e) => {
        let accessoryId = e.currentTarget.dataset.accessory;
        let avatarAcessorioEl = document.getElementById(accessoryId);
        if (e.currentTarget.checked) {
            avatarAcessorioEl.classList.add('visivel');
        } else {
            avatarAcessorioEl.classList.remove('visivel');
        }
    });
});

// desafio 2
let buttonEl = document.querySelector('#baixar');

buttonEl.addEventListener('click', () => {
    let avatarEl = document.getElementById('avatar-preview');
    html2canvas(avatarEl, { useCORS: true }).then(function (canvas) {
        let imagemCodificadaEmURL = canvas.toDataURL();
        let linkEl = document.createElement('a');
        linkEl.download = 'avatar.png';
        linkEl.href = imagemCodificadaEmURL;
        document.body.appendChild(linkEl);
        linkEl.click();
    });
});