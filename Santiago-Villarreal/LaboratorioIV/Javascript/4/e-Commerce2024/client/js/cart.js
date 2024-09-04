const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");

const displayCart = ()=>{
    modalContainer.innerHTML = "";
    modalContainer.style.display="block";
    modalOverlay.style.display="block";
    //modal header
    const modalHeader = document.createElement("div");
    const modalClose = document.createElement("div");
    modalClose.innerText="❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);
    modalClose.addEventListener("click",()=>{
        modalContainer.style.display="none";
        modalOverlay.style.display="none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText="Cart";
    modalTitle.className="modal-title";
    modalHeader.append(modalTitle);
    modalContainer.append(modalHeader);

    //modal body
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}"/>
            <div class="product-info">
                <h4>${product.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrease">-</span>
                <span class="quantity-input">${product.quanty}</span>
                <span class="quantity-btn-increase">+</span>
            </div>
                <div class="price">${product.price*product.quanty}$</div>
                <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);
        const decrease = modalBody.querySelector(".quantity-btn-decrease");
        decrease.addEventListener("click", ()=>{
            if(product.quanty !== 1){
                product.quanty--;
                displayCart();
            }
        });
        const increase = modalBody.querySelector(".quantity-btn-increase");
        increase.addEventListener("click", ()=>{
            product.quanty--;
            displayCart();
        })
    });
    //modal footer
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class="total-price">Total :)</div>
    `;
    modalContainer.append(modalFooter);
}

cartBtn.addEventListener("click",displayCart);