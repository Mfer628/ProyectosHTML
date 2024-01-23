const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
};

const body = document.querySelector('body');
const bgModeBtn = document.getElementById('bgModeBtn');
const bgModeIcon = document.getElementById('bgModeIcon');
const sectionHeader = document.querySelector('section h1');

bgModeBtn.onclick = function(){
    body.classList.toggle("dark-mode");
    bgModeIcon.classList.toggle("fa-sun-o");
    bgModeIcon.classList.toggle("fa-moon-o");
    sectionHeader.classList.toggle("dark-mode");
}


const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) =>{
    pregunta.addEventListener('click', (e) =>{
        //Esto nos ayuda a cuando damos un click se nos va a desplegar 
        e.currentTarget.classList.toggle('activa');
        //Accedemeos a la rspuesta 
            const respuesta=pregunta.querySelector(".respuesta"); 
            const alturaReal=pregunta.scrollHeight;
            //console.log(alturaReal);
            //respuesta.style.maxHeight='10px'
            //Comprobamos para saber si esta vacia
           if(!respuesta.style.maxHeight){
            //console.log("Esta vacia");
            //Le asiganamos el tamaño de scroll que le hizimos 
            respuesta.style.maxHeight=alturaReal + 'px';
           }else{
            respuesta.style.maxHeight=null;
           }
    });
});
