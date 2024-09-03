const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");


const displayCart = ()=>{ //Función para mostrar el carrito
    modalContainer.innerHTML = ""; //Limpiamos el contenido del modal
    modalContainer.style.display = "block"; //Mostramos el modal
    modalOverlay.style.display = "block"; //Mostramos el overlay
    //modal header
    const modalHeader = document.createElement("div"); 

    const modalClose = document.createElement("div"); 
    modalClose.innerText ="❌"; //Agregamos una "X" para cerrar el modal
    modalClose.className = "modal-close"; //Le ponemos una clase para darle estilos
    modalHeader.append(modalClose); //Agregamos el botón de cerrar al header

    modalClose.addEventListener("click",()=>{ //Le agregamos un evento al botón de cerrar
        modalContainer.style.display = "none"; //Cuando se haga click, ocultamos el modal
        modalOverlay.style.display = "none"; //Cuando se haga click, ocultamos el overlay
    });


    const modalTitle = document.createElement("div"); 
    modalTitle.innerText = "Cart"; //Agregamos el título "Cart"
    modalTitle.className = "modal-title"; //Le ponemos una clase para darle estilos
    modalHeader.append(modalTitle); //Agregamos el título al header

    modalContainer.append(modalHeader);
};


cartBtn.addEventListener("click",displayCart);