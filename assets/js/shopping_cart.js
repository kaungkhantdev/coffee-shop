let items = JSON.parse(localStorage.getItem('cart')) || []

document.addEventListener('DOMContentLoaded', () => {
    let totalPrice = document.getElementById('totalPrice');
    let total = items.reduce((sum, item) => {
        return sum + (item.price * item.quantity); 
    }, 0);
    totalPrice.textContent = `$ ${total.toFixed(2)}`; 
    

    let cartDataElement = document.getElementById('cartData');
    
    let cartData = cartDataElement.innerHTML;

    items.forEach(element => {
        console.log('element', element);
        
        cartData += `
            <div class="d-flex align-items-start justify-content-between mb-4 border-bottom ">
                <div class=" d-flex gap-4">
                    <img src="${element.img_url}" alt="coffee photo" style="height: 100px; width: 100px;" class="object-fit-cover">
                    <div>
                        <h5 class="mb-0" style="font-size: 20px;">${element.name}</h5>
                        <div class="d-flex gap-2 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffb325" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffb325" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffb325" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div class="mb-4">
                            <p class="mb-0 ">
                                price: <span class="fw-bold"> $ ${element.price}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-4">
                    <div>
                        <span>
                            Quantity: <span class="fw-bold">${element.quantity}</span>
                        </span>
                    </div>
                </div>
            </div>
        `;
    });

    cartDataElement.innerHTML = cartData;
});
