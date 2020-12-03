
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    });
}


function iniciaRelogio(){
    timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}



document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('zerar') ){
        clearInterval(timer);
        segundos = 0;
        relogio.classList.remove('pausado');
        relogio.innerHTML ='00:00:00';
    }

    if(elemento.classList.contains('pausar') ){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if(elemento.classList.contains('iniciar') ){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio()
    }
});



/*





iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML ='00:00:00';
})
*/

