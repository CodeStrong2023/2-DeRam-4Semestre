const shopContent = document.getElementById('shopContent');

products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.className = 'product';
  productElement.innerHTML = `
    <h3 class="card__title">${product.band}</h3>
    <h4 class="card__subtitle">${product.record}</h4>
    <img class="card__img" src="${product.image}" alt="${product.name}">
    <p class="card__price">€ ${product.price}</p>
    <p class="card__stock">Stock: ${product.stock}</p>
    <button class="card__btn" onclick="addToCart(${product.id})">Añadir al carrito</button>
  `;
  shopContent.appendChild(productElement);
});
