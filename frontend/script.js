// frontend/script.js

const friends = [];
const items = [];

function addFriend() {
    const name = document.getElementById('friendName').value;
    const type = document.getElementById('dietType').value;

    if (name.trim() === '') return;

    friends.push({ name, type });
    renderFriends();
    document.getElementById('friendName').value = '';
}

function addItem() {
    const name = document.getElementById('itemName').value;
    const price = parseFloat(document.getElementById('itemPrice').value);
    const type = document.getElementById('itemType').value;

    if (!name || isNaN(price)) return;

    items.push({ name, price, type });
    renderItems();
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
}

function renderFriends() {
    const list = document.getElementById('friendList');
    list.innerHTML = '';
    friends.forEach((f, i) => {
        const li = document.createElement('li');
        li.textContent = `${f.name} (${f.type})`;
        list.appendChild(li);
    });
}

function renderItems() {
    const list = document.getElementById('itemList');
    list.innerHTML = '';
    items.forEach((item, i) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price} (${item.type})`;
        list.appendChild(li);
    });
}
