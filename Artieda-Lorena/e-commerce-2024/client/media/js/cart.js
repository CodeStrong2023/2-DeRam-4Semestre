const cart = []; 

const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    const modalHeader = document.createElement("div");
    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    if (cart.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.innerText = "El carrito está vacío.";
        modalContainer.append(emptyMessage);
    } else {
        cart.forEach((product) => {
            const modalBody = document.createElement("div");
            modalBody.className = "modal-body";
            modalBody.innerHTML = `
            <div class="product">
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h4>${product.productName}</h4>
                </div>
                <div class="quantity">
                    <span class="quantity-btn-decrease">-</span>
                    <span class="quantity-input">${product.quantity}</span>
                    <span class="quantity-btn-increase">+</span>
                </div>
                <div class="price">${(product.price * product.quantity).toFixed(2)}$</div>
                <div class="delete-product">❌</div>
            </div>
            `;
            modalContainer.append(modalBody);

            const quantityDecreaseBtn = modalBody.querySelector(".quantity-btn-decrease");
            const quantityIncreaseBtn = modalBody.querySelector(".quantity-btn-increase");
            const quantityInput = modalBody.querySelector(".quantity-input");
            const deleteProduct = modalBody.querySelector(".delete-product");

            quantityDecreaseBtn.addEventListener("click", () => {
                if (product.quantity > 1) {
                    product.quantity--;
                    quantityInput.innerText = product.quantity;
                    updatePrice(modalBody, product);
                    displayCartCounter();
                }
            });

            quantityIncreaseBtn.addEventListener("click", () => {
                product.quantity++;
                quantityInput.innerText = product.quantity;
                updatePrice(modalBody, product);
                displayCartCounter();
            });

            deleteProduct.addEventListener("click", () => {
                deleteCartProduct(product.id);
                displayCartCounter();
            });
        });

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        modalFooter.innerHTML = `
        <div class="total-price">Total: ${total.toFixed(2)}$</div>
        <button class="btn-primary" id="checkout-btn">Go to checkout</button>
        <div id="button-checkout"></div>
        `;
        modalContainer.append(modalFooter);

        // Mercado Pago
        const mercadopago = new MercadoPago("APP_USR-aa824168-5d91-4cea-944d-5b910437bfa7", {
            locale: "es-AR",
        });

        const checkoutButton = modalFooter.querySelector("#checkout-btn");

        checkoutButton.addEventListener("click", function () {
            checkoutButton.remove();

            const orderData = {
                items: cart.map(product => ({
                    title: product.productName,
                    quantity: product.quantity,
                    unit_price: parseFloat(product.price), // Asegúrate de que sea un número
                })),
            };
            console.log('Order data:', orderData); // Para depurar

            fetch("http://localhost:3000/create_preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(preference => {
                console.log(preference); // Verifica la estructura de la respuesta
                createCheckoutButton(preference.id);
            })
            .catch(error => {
                alert("Unexpected error: " + error.message);
            });
        });

        function createCheckoutButton(preferenceId) {
            // Inicializa el checkout
            const bricksBuilder = mercadopago.bricks();

            const renderComponent = async (bricksBuilder) => {
                await bricksBuilder.create(
                    "wallet",
                    "button-checkout",
                    {
                        initialization: {
                            preferenceId: preferenceId,
                        },
                        callbacks: {
                            onError: (error) => console.error(error),
                            onReady: () => {},
                        },
                    }
                );
            };
            renderComponent(bricksBuilder);
        }
    }
}

const updatePrice = (modalBody, product) => {
    const priceDiv = modalBody.querySelector(".price");
    priceDiv.innerText = `${(product.price * product.quantity).toFixed(2)}$`;
}

const deleteCartProduct = (id) => {
    const foundIndex = cart.findIndex((element) => element.id === id);
    if (foundIndex !== -1) {
        cart.splice(foundIndex, 1);
    }
    displayCart();
    displayCartCounter();
}

modalOverlay.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
});

cartBtn.addEventListener("click", displayCart);

const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quantity, 0);
    cartCounter.style.display = cartLength > 0 ? "block" : "none"; // Muestra u oculta según la cantidad
    cartCounter.innerText = cartLength;
}
