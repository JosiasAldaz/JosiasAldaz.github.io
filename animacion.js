// para que el código se ejecute cuando el documento debes añadir estas lineas de TailwindCSS en el archivo HTML 
//opacity-0 transition-opacity duration-1000 ease-in-out animate-fade-in
function handleScrollFade() {
     // Confirmación de ejecución
    const articles = document.querySelectorAll('.animate-fade-in');

    articles.forEach((article) => {
        const rect = article.getBoundingClientRect();

        // Efecto de desvanecimiento a los elementos cuando aparecen en la vista
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            article.classList.add('opacity-100');
            article.classList.remove('opacity-0');
        } else {
            // Remueve la clase de opacidad al salir de la
            article.classList.remove('opacity-100');
            article.classList.add('opacity-0');
        }
    });
}

// Evento para activar la función en el scroll
window.addEventListener('scroll', handleScrollFade);


  