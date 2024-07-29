const foodItems = [
    { name: 'Ramen bowl', price: 'Rs. 100.00', count: 1, web: "https://th.bing.com/th/id/OIP.x-1Rn2BPDZ8QNjTmUbx3QAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3" },
    { name: 'Chapati', price: 'Rs. 100.00', count: 1, web: "https://th.bing.com/th/id/OIP.2QoIkJxfhNslsJrY8k2TfAHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },

];

function renderFoodItems() {
    const container = document.getElementById('food-items');
    container.innerHTML = '';

    foodItems.forEach((item, index) => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        itemContainer.innerHTML = `
            <img src=${item.web} alt="${item.name}">
            <div class="item-info">
                <h2>${item.name}</h2>
                <p>${(item.price * item.count).toFixed(2)}</p>
            </div>
            <div class="item-third">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onclick="removeItem(${index})">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
                <div class="item-counter">
                    <button onclick="decrement(${index})">-</button>
                    <p id="counter-${index}">${item.count}</p>
                    <button onclick="increment(${index})">+</button>
                </div>
            </div>
        `;
        container.appendChild(itemContainer);
    });
}


function increment(index) {
    foodItems[index].count++;
    document.getElementById(`counter-${index}`).innerText = foodItems[index].count;
}

function decrement(index) {
    if (foodItems[index].count > 0) {
        foodItems[index].count--;
        document.getElementById(`counter-${index}`).innerText = foodItems[index].count;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderFoodItems();
});

function removeItem(index) {
    foodItems.splice(index, 1);
    renderFoodItems();
}

document.addEventListener('DOMContentLoaded', function() {
    renderFoodItems();
});
