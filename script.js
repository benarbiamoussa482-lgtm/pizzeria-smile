const menuData = {
    pizzas: [
        { name: "Pizza Marguerite", desc: "Sauce Tomate, Fromage, Olive.", prices: "M:250 DA" },
        { name: "Pizza Royale", desc: "Sauce Tomate, Fromage, Poulet Hachée, Olive.", prices: "M:350 DA" },
        { name: "Pizza Viande", desc: "Sauce Tomate, Fromage, Viande Hachée, Olive.", prices: "M:400 DA" },
        { name: "Pizza Poulet", desc: "Sauce Tomate, Poulet, Olive.", prices: "M:450 DA" },
        { name: "Pizza Sicilienne", desc: "Sauce Tomate, Fromage, Thon, Olive.", prices: "M:500 DA" },
        { name: "Pizza Végétarien", desc: "Fromage, Champignon, Poivron, Oignon, Maïs, Olive.", prices: "M:500 DA" },
        { name: "Pizza Napolliaine", desc: "Sauce Tomate, Fromage, Champignon, Viande Hachée, Olive.", prices: "M:550 DA" },
        { name: "Pizza Romaine", desc: "Sauce Tomate, Fromage, Demi-Poulet, Demi-Viande Hachée, Cheddar, Olive.", prices: "M:600 DA" },
        { name: "Pizza Boisé", desc: "Sauce Blanche, Fromage, Poulet, Cheddar, Olive.", prices: "M:650 DA" },
        { name: "Pizza 4 Saison", desc: "Poulet, Champignon, Thon, Olive.", prices: "M:700 DA" },
        { name: "Pizza 4 Fromage", desc: "Sauce Blanche, Fromage Fondu, Cheddar, Gouda, Camembert, Olive.", prices: "M:700 DA" },
        { name: "Pizza Compioné", desc: "Sauce Tomate, Viande Hachée, Mozzarella, Cheddar, Olive.", prices: "M:650 DA" },
        { name: "Pizza Chef", desc: "Sauce Tomate, Fromage, Viande Hachée, Kebab, Cheddar, Olive.", prices: "M:700 DA" },
        { name: "Pizza Fumée", desc: "Sauce Tomate, Rôti Fumée, Mozzarella, Cheddar, Olive.", prices: "M:700 DA" },
        { name: "Pizza Smile", desc: "Sauce Tomate, Fromage, Poulet, Viande Hachée, Cheddar, Olive, avec bordure Fromage.", prices: "M:800 DA" },
        { name: "Pizza Couvert", desc: "Sauce Tomate, Poulet, Fromage Fondu, Cheddar, Olive.", prices: "M:800 DA" },
        { name: "Pizza Venesia", desc: "Sauce Tomate, Poulet, Viande Hachée, Mozzarella, Cheddar, Olive.", prices: "M:900 DA" },
        { name: "Pizza Capriccioza", desc: "Sauce Tomate, Poulet, Viande Hachée, Mozzarella, Cheddar, Olive, Avec Bordure Fromage.", prices: "M:1000 DA" },
        { name: "Pizza Crevette", desc: "Sauce Tomate, Fromage, Crevette, Cheddar, Olive.", prices: "M:1000 DA" }
    ],
    sandwichs: [
        { name: "Poulet hachée", desc: "Sandwich délicieux", prices: "M:200 DA" },
        { name: "Spécial", desc: "Sandwich délicieux", prices: "M:250 DA" },
        { name: "Spécial Doublé", desc: "Sandwich délicieux", prices: "M:350 DA" },
        { name: "Chawarma", desc: "Sandwich délicieux", prices: "M:350 DA" },
        { name: "Mariné", desc: "Sandwich délicieux", prices: "M:350 DA" },
        { name: "Viande Haché", desc: "Sandwich délicieux", prices: "M:350 DA" },
        { name: "Libané", desc: "Sandwich délicieux", prices: "M:400 DA" },
        { name: "Kebda", desc: "Sandwich délicieux", prices: "M:400 DA" },
        { name: "Escalope à la crème", desc: "Sandwich délicieux", prices: "M:450 DA" },
        { name: "Mexicain", desc: "Sandwich délicieux", prices: "M:450 DA" },
        { name: "Smile", desc: "Sandwich délicieux", prices: "M:450 DA" },
        { name: "Crispy", desc: "Sandwich délicieux", prices: "M:550 DA" },
        { name: "Chessy Chiken", desc: "Sandwich délicieux", prices: "M:600 DA" },
        { name: "Mortadella", desc: "Sandwich délicieux", prices: "M:650 DA" },
        { name: "Chiken & Crevette", desc: "Sandwich délicieux", prices: "M:650 DA" },
        { name: "Chessy Smile", desc: "Sandwich délicieux", prices: "M:650 DA" }
    ],
    burgers: [
        { name: "Burger", desc: "Savoureux", prices: "M:250 DA" },
        { name: "Cheese Burger", desc: "Savoureux", prices: "M:350 DA" },
        { name: "Big Burger", desc: "Savoureux", prices: "M:400 DA" },
        { name: "Crispy Burger", desc: "Savoureux", prices: "M:450 DA" },
        { name: "Burger mixte", desc: "Savoureux", prices: "M:550 DA" }
    ],
    tacos: [
        { name: "Tacos Poulet", desc: "Garni", prices: "M:500 DA" },
        { name: "Tacos Chawarma", desc: "Garni", prices: "M:500 DA" },
        { name: "Tacos Viande", desc: "Garni", prices: "M:600 DA" },
        { name: "Tacos Mixte", desc: "Garni", prices: "M:650 DA" },
        { name: "Tacos Crispé", desc: "Garni", prices: "M:650 DA" }
    ],
    gratines: [
        { name: "Gratine poulet", desc: "Chaud et fondant", prices: "M:500 DA" },
        { name: "Gratine viande", desc: "Chaud et fondant", prices: "M:600 DA" },
        { name: "Gratine Mixte", desc: "Chaud et fondant", prices: "M:650 DA" }
    ],
    poutine: [
        { name: "Poulet pané", desc: "Délicieuse poutine", prices: "M:650 DA" },
        { name: "Mariné", desc: "Délicieuse poutine", prices: "M:650 DA" },
        { name: "Mixte", desc: "Délicieuse poutine", prices: "M:800 DA" },
        { name: "Chiken & Crevette", desc: "Délicieuse poutine", prices: "M:800 DA" }
    ],
    plats: [
        { name: "Plat Spécial", desc: "Plat savoureux", prices: "M:600 DA" },
        { name: "Plat Kabab", desc: "Plat savoureux", prices: "M:600 DA" },
        { name: "Plat Mariné", desc: "Plat savoureux", prices: "M:650 DA" },
        { name: "Plat Kebda", desc: "Plat savoureux", prices: "M:700 DA" },
        { name: "Plat à la Crème", desc: "Plat savoureux", prices: "M:700 DA" },
        { name: "Plat Crispé", desc: "Plat savoureux", prices: "M:800 DA" },
        { name: "Plat Mélange", desc: "Plat savoureux", prices: "M:2000 DA" }
    ],
    salades: [
        { name: "Salade Smile", desc: "Salade fraîche", prices: "M:600 DA" }
    ]
};

const defaultImages = {
    pizzas: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    sandwichs: "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=500&q=80",
    burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    tacos: "https://images.unsplash.com/photo-1662483526685-6ff83637eab8?w=500&q=80",
    gratines: "https://images.unsplash.com/photo-1619895092538-128341789043?w=500&q=80",
    poutine: "https://images.unsplash.com/photo-1586805608485-add336722759?w=500&q=80",
    plats: "https://images.unsplash.com/photo-1544025162-8315ea07525b?w=500&q=80",
    salades: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80"
};
let cart = [];

function filterMenu(category) {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    menuData[category].forEach(item => {
        container.innerHTML += `
            <div class="menu-item">
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p style="font-size:0.8em; color:#aaa;">${item.desc}</p>
                    <div style="font-weight:bold; margin:10px 0;">${item.prices}</div>
                    <button class="btn-add" onclick="addToCart('${item.name}', '${item.prices}')">AJOUTER</button>
                </div>
            </div>`;
    });
}

function addToCart(name, price) {
    let priceValue = parseInt(price.replace(/[^0-9]/g, ''));
    cart.push({ name, price: priceValue });
    alert(name + " ajouté !");
}

function showCart() {
    let itemsDiv = document.getElementById('cart-items');
    let total = 0;
    itemsDiv.innerHTML = '';
    cart.forEach(item => {
        itemsDiv.innerHTML += `<p>${item.name} - ${item.price} DA</p>`;
        total += item.price;
    });
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-modal').style.display = 'block';
}

function sendOrderWhatsApp() {
    let phone = document.getElementById('customer-phone').value;
    let address = document.getElementById('customer-address').value;
    if(!phone || !address) { alert("Veuillez remplir téléphone et adresse!"); return; }
    let msg = `Commande Pizzeria Smile:%0A`;
    cart.forEach(item => msg += `- ${item.name}%0A`);
    window.open(`https://wa.me/213549290971?text=${msg}%0ATéléphone: ${phone}%0AAdresse: ${address}`, '_blank');
}

window.onload = () => { filterMenu('pizzas'); };
