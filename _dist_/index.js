// Importamos de lazy.js lo que necesitamos

import {registerImage} from './lazy.js';


const baseUrl = 'https://randomfox.ca/images/';

const appNode = document.querySelector('#images');



// Trabajando con la API de los ZORRITOS BONITOS

// Creamos una function para buscar numeros random
function randomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function imageCreated(){ 
    // Creamos la etiqueta con la imagen de la API
    const image = document.createElement('img');
    image.dataset.src = `${baseUrl}${randomNumber(1,120)}.jpg`; 
    image.className = 'h-40 w-40  gap-2 md:h-60 md:w-60 rounded-lg mx-auto object-cover ';
    // registerImage(image);  DEPENDIENDO DE LO QUE YO PASE ACA, EN EL REGISTER IMG SE MOSTRARA LA IMAGEN O EL CONTAINER
     
    // Creamos el div contenedor de las imagenes
    const divImg = document.createElement('div');
    divImg.className = 'm-10 grid place-content-center';
    divImg.id = 'ola'
    divImg.append(image);
    registerImage(divImg);
    return divImg; 
}
// Button add images
const btnAddImg = document.querySelector('#addImg') 
btnAddImg.addEventListener('click', (event) => {
    const divCrea = imageCreated();
    appNode.append(divCrea);
})

// Button clean 
const btnCleanImg = document.querySelector('#cleanImg') 
btnCleanImg.addEventListener('click', () => {
   console.log(appNode.childNodes);
   appNode.innerHTML = '';
})

























// Creamos la etiqueta con la imagen que sacamos de la API de ZORRITOS BONITOS
// for (let i = 0; i < 20; i++) {
    
//     Creamos la etiqueta con la imagen de la API
//     const image = document.createElement('img');
//     image.src = `${baseUrl}${randomNumber(1,120)}.jpg`; 
//     image.className = 'h-60 w-60 md:h-60 md:w-60 rounded-lg mx-auto object-cover ';
     
//     Creamos el div contenedor de las imagenes
//     const divImg = document.createElement('div');
//     divImg.className = 'm-10 grid place-content-center';
//     divImg.append(image)
    
//     Agregamos a un array con los div de las imagenes
//     allNodes.push(divImg);   
// }
// Aca agregamos la lista al nodo de la app, de este modo todo se cargara de una sola vez
// appNode.append(...allNodes)