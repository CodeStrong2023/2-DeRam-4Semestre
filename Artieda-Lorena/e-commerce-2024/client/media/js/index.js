document.addEventListener("DOMContentLoaded", () => {
    const shopContent = document.getElementById("shopContent");
    const payButton = document.getElementById('pay-button'); // Referencia al botón de pagar

    productos.forEach((product) => {
        const content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${product.img}" alt="${product.productName}">
            <h3>${product.productName}</h3>
            <p class="price">${product.price}$</p>
        `;
        shopContent.append(content);

        const buyButton = document.createElement("button");
        buyButton.innerText = "Comprar";
        content.append(buyButton);

        buyButton.addEventListener("click", () => {
            const existingProduct = cart.find((prod) => prod.id === product.id);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({
                    id: product.id,
                    productName: product.productName,
                    price: product.price,
                    quantity: 1,
                    img: product.img,
                });
            }

            displayCartCounter();
            alert(`${product.productName} agregado al carrito!`);

            // Muestra el botón de pagar si hay productos en el carrito
            payButton.style.display = cart.length > 0 ? 'block' : 'none';
        });
    });

    // Evento para el botón de pagar
    payButton.addEventListener('click', async () => {
        const response = await fetch('http://localhost:3000/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: cart.map(item => ({
                    title: item.productName,
                    price: item.price,
                    quantity: item.quantity,
                })),
            })
        });

        const data = await response.json();
        if (data.init_point) {
            window.location.href = data.init_point; // Redirige a Mercado Pago
        } else {
            alert('Error al iniciar el pago: ' + data.error);
        }
    });
});
