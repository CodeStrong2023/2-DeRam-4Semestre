const shopContent = document.getElementById("shopContent"); //Aquí vamos a poner los productos
const cart = []; //Este es nuestro carrito, un array vacío por ahora

productos.forEach((product) =>{ //Recorremos el array de productos
    const content = document.createElement("div"); //Creamos un div para cada producto
    content.innerHTML = `
    <img src="${product.img}" >
    <h3>${product.productName}</h3>
    <p>$ ${product.price}</p>
    `; //Le agregamos la imagen, el nombre y el precio
    shopContent.append(content); //Agregamos el div al contenedor de productos

    const buyButton = document.createElement("button"); //Creamos un botón para comprar
    buyButton.innerText = "Comprar"; //Le ponemos el texto "Comprar"

    content.append(buyButton); //Agregamos el botón al div del producto

    buyButton.addEventListener("click", () => { //Le agregamos un evento al botón
        cart.push({ //Cuando se haga click en el botón, agregamos el producto al carrito 
            id: product.id,
            productName: product.productName,
            price: product.price,
            quantity: product.quantity,
            img: product.img,
        }) 
        console.log(cart) //Mostramos el carrito en la consola
    })
});