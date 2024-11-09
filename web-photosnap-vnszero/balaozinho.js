const balaozinhoEl = document.getElementById('balaozinho');
const marcacoesEl = document.querySelectorAll('.marcacao')

marcacoesEl.forEach((marcacaoEl) => {
    marcacaoEl.addEventListener('mouseenter', () => {
        balaozinhoEl.style.display = 'block';
        balaozinhoEl.innerHTML = "<h2>" + marcacaoEl.dataset.titulo + "</h2><p>" + marcacaoEl.dataset.conteudo + "</p>";
    });

    marcacaoEl.addEventListener('mouseleave', () => {
        balaozinhoEl.style.display = 'none';
        balaozinhoEl.innerHTML = '';
    });
});

let bodyEl = document.querySelector('body');
bodyEl.addEventListener('mousemove', (e) => {
    balaozinhoEl.style.top = e.pageY + 'px'; 
    balaozinhoEl.style.left = e.pageX + 'px';
});

const botaoEl = document.getElementById('definir-marcacao');
const marcacao1El = document.querySelector('.marcacao');

botaoEl.addEventListener('click', () => {
    const x = document.getElementById('marcacao-x').value + 'px';
    const y = document.getElementById('marcacao-y').value + 'px';
    const largura = document.getElementById('marcacao-largura').value + 'px';
    const altura = document.getElementById('marcacao-altura').value + 'px';
    
    marcacao1El.style.left = x;
    marcacao1El.style.top = y;
    marcacao1El.style.width = largura;
    marcacao1El.style.height = altura;
});
