//MOVIMIENTO A LOS DOS PRIMEROS CIRCULOS 

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight*1;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'moverse 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado2');
    let posicionObj2 = animacion.getBoundingClientRect().top;
    console.log(posicionObj2);
    let tamañoDePantalla = window.innerHeight*1;

    if(posicionObj2 < tamañoDePantalla){
        animacion.style.animation = 'moverse 1.5s ease-out'
    }
})


// MOVIMIENTO A LOS DOS ULTIMOS CIRCULOS

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado3');
    let posicionObj3 = animacion.getBoundingClientRect().top;
    console.log(posicionObj3);
    let tamañoDePantalla = window.innerHeight*1;

    if(posicionObj3 < tamañoDePantalla){
        animacion.style.animation = 'moverse 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado4');
    let posicionObj4 = animacion.getBoundingClientRect().top;
    console.log(posicionObj4);
    let tamañoDePantalla = window.innerHeight*1;

    if(posicionObj4 < tamañoDePantalla){
        animacion.style.animation = 'moverse 1.5s ease-out'
    }
})


// MOVIMIENTO AL FOOTER

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado5');
    let posicionObj5 = animacion.getBoundingClientRect().top;
    console.log(posicionObj5);
    let tamañoDePantalla = window.innerHeight*0.9;

    if(posicionObj5 < tamañoDePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})


// MOVIMIENTO A LOS ARTICULOS

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado6');
    let posicionObj6 = animacion.getBoundingClientRect().top;
    console.log(posicionObj6);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj6 < tamañoDePantalla){
        animacion.style.animation = 'moverse 0.7s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado7');
    let posicionObj7 = animacion.getBoundingClientRect().top;
    console.log(posicionObj7);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj7 < tamañoDePantalla){
        animacion.style.animation = 'moverse 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado8');
    let posicionObj8 = animacion.getBoundingClientRect().top;
    console.log(posicionObj8);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj8 < tamañoDePantalla){
        animacion.style.animation = 'moverse 0.7s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado9');
    let posicionObj9 = animacion.getBoundingClientRect().top;
    console.log(posicionObj9);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj9 < tamañoDePantalla){
        animacion.style.animation = 'moverse 1s ease-out'
    }
})



