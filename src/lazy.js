 let totalImages = 0;
let loadedImages = 0;





// Parte INTERSECTION OBSERVER

// Haremos uso de la API de intersetion Observer
const observer = new IntersectionObserver( (allElements) => {
    allElements
        .filter(isIntersecting) //Aca se refiere a todas la imagenes que entran en el viewPort 
        .forEach(loadImage)
})


const isIntersecting = (entry) => {
    return entry.isIntersecting //Esto devuelve TRUE->si esta dentro de la pantalla y FALSO->si esta fuera de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target; //Este es el contenedor del la img
    
    // const image = container.querySelector('img');
    const image = container.firstChild;
    const url = image.dataset.src;
    // Le indicamos al navegador que LOAD IMAGE
    image.src = url;

    // Mostraremos los comentarios,cuando se cargue una imagen 
    image.onload = () => {
        loadedImages++;
        logState();
    }
    
    // Despues de verla, debemos desregistrarla
    observer.unobserve(container) //De esta manera, solo se registraran las imagenes una vez
}


// Creamos la funcion para registrar la imagen
export const registerImage  = (image) => {
    observer.observe(image);
    // Mostraremos los comentarios, cuando se agreguen las imagenes
    totalImages++;
    logState();
}

export const logState = () => {
    console.log(`⚪ Total images: ${totalImages}` )
    console.log(`🟣 Load images: ${loadedImages}`)
    console.log('----------------------------------------')
}