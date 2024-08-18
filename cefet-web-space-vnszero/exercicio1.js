// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let calculateEl = document.querySelector('#calcular');
calculateEl.addEventListener('click', function(){
    let gEl = document.querySelector('#constante');
    let mass1El = document.querySelector('#massa1');
    let mass2El = document.querySelector('#massa2');
    let distanceEl = document.querySelector('#distancia');
    let resultEl = document.querySelector('#resultado');

    if (mass1El.value <= 0 || mass2El.value <= 0)
    {
        alert('Massa precisa ser um valor maior que 0');
    }
    else if(distanceEl.value <= 0)
    {
        alert('distancia entre os corpos precisa ser maior que 0');
    }
    else
    {
        resultEl.value = gEl.value * mass1El.value * mass2El.value / Math.pow(distanceEl.value, 2);
    }
});
