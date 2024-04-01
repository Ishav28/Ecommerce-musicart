// JavaScript code for cart and order functionality

let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCartCount();
}

function updateCartCount() {
    let cartCount = document.getElementById('viewCart');
    cartCount.textContent = `View Cart (${cart.length})`;
}

function placeOrder() {
    // Placeholder for order placement functionality
    alert('Order placed successfully!');
}
