const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsalada = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostre = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');

document.addEventListener('DOMContentLoaded',() =>{
 eventos ();
 platillos();
})

const eventos = ()=>{
    menu.addEventListener('click', abrirMenu);

}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar ();
}
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }

    });

});
imagenes.forEach(imagen=>{
 
 observer.observe(imagen);
});

const botonCerrar = () =>{
    const btnCerra = document.createElement('P');
    const overlay = document.createElement('div');
    const body = document.querySelector('body');
    overlay.classList.add('pantalla-completa');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerra.textContent =  'x';
    btnCerra.classList.add('btnCerra');
    //while(navegacion.children[5]){
        //navegacion.removeChild(navegacion.children[5])
    //}
    navegacion.appendChild(btnCerra);
    cerraMenu(btnCerra, overlay);
    


}
const cerraMenu = (boton, overlay)=>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    })
    overlay.onclick = function  (){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }

}
const platillos = ()=>{
    let platillosArreglos = [];
    const platillos = document.querySelectorAll('.platillo');
    platillos.forEach(platillo => platillosArreglos=[...platillosArreglos, platillo])
    const ensaladas = platillosArreglos.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada');
    
    const pastas = platillosArreglos.filter(pasta=> pasta.getAttribute('data-platillo') === 'pasta');
    
    const pizzas = platillosArreglos.filter(pizza=> pizza.getAttribute('data-platillo') === 'pizza');
    
    const postres = platillosArreglos.filter(postre=> postre.getAttribute('data-platillo') === 'postre');
    

    mostrarPlatillos (ensaladas, pastas, pizzas, postres, platillosArreglos);
    
}
const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos)=>{
    btnEnsalada.addEventListener('click', ()=>{
        limpiarHtml (contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));

    });
    btnPasta.addEventListener('click', ()=>{
        limpiarHtml (contenedorPlatillos);
        pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));

    });
    btnPizza.addEventListener('click', ()=>{
        limpiarHtml (contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));

    });
    btnTodos.addEventListener('click', ()=>{
        limpiarHtml (contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));

    });
    btnPostre.addEventListener('click', ()=>{
        limpiarHtml (contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));

    });
    

}
const limpiarHtml = (contenedor) => {
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }

}
