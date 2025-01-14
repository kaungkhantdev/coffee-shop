const addToLocalStorage =  (count) => {
   window.localStorage.setItem('items', count);
   return
}

const addToLocalStorageItems =  (count) => {
    window.localStorage.setItem('items', count);
    return
 }

const getFromLocalStorage =  () => {
   return Number(window.localStorage.getItem('items')) || 0;
}

const addToCart = (event) => {
    let items = getFromLocalStorage(); 
    items += 1;
    addToLocalStorage(items);

    document.querySelectorAll('.cartItem').forEach(item => {
        item.textContent = items;
    });
    console.log('Cart updated:', items);

    addToCartItems(event)

}

const addToCartItems = (event) => {
    const button = event.target;
    const productDiv = button.closest('.col-6'); 

    const imageUrl = document.querySelector('.col-6.col-md-4.col-lg-3 img').src;
    const productName = productDiv.querySelector('h5').textContent;
    const productPrice = productDiv.querySelector('.fw-bold').textContent; 
    const stars = productDiv.querySelectorAll('svg'); 

    const productData = {
        id: Date.now(),
        img_url: imageUrl.split(window.location.origin)[1],
        name: productName,
        price: Number(productPrice),
        stars: stars.length, 
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(productData);

    localStorage.setItem('cart', JSON.stringify(cart));

}

const buttons = document.querySelectorAll('.addToCartButton');
buttons.forEach(button => {
    button.addEventListener('click', addToCart);
});

const updateCartDisplay = () => {
    const items = getFromLocalStorage(); 
    document.querySelectorAll('.cartItem').forEach(item => {
        item.textContent = items;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});