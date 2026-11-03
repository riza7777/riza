// Daftar produk dengan gambar
const products = [
    { id: 1, name: 'TEH PUCUK', price: 2000, img: 'img/tp.jpeg'},
    { id: 2, name: 'CHOCOLATOS', price: 1000, img: 'img/cts.jpeg'},
    { id: 3, name: 'CHOCOPIE', price: 2000, img: 'img/cc.jpeg'},
    { id: 4, name: 'CHOKI-CHOKI', price: 2000, img: 'img/ck.jpeg'},
    { id: 5, name: 'AOKA', price: 2000, img: 'img/ao.jpeg'},
    { id: 6, name: 'SIIP', price: 2000, img: 'img/sip.jpeg'},


];

// Keranjang  belanja
let cart = [];

// Fungsi untuk menampilkan daftar produk
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHtml = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rp ${product.price}</p>
        <button onclick="addToCart(${product.id})">Tambah ke keranjang</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Fungsi untuk menambah produk ke keranjang belanja
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }    updateCart();
}

// Fungsi untuk menampilkan isi keranjang belanja
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}
        `
    })
}