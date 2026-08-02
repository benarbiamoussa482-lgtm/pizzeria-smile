const menu = {
  pizzas: [
    { name: "Marguerite", prices: { M: "250 DA", L: "500 DA", XL: "1000 DA" } },
    { name: "Royale", prices: { M: "350 DA", L: "700 DA", XL: "1300 DA" } },
    { name: "Viande", prices: { M: "400 DA", L: "800 DA", XL: "1500 DA" } },
    { name: "Poulet", prices: { M: "450 DA", L: "900 DA", XL: "1800 DA" } },
    { name: "Sicilienne", prices: { M: "500 DA", L: "1000 DA", XL: "1900 DA" } },
    { name: "Végétarien", prices: { M: "500 DA", L: "1000 DA", XL: "1900 DA" } },
    { name: "Napolliaine", prices: { M: "550 DA", L: "1100 DA", XL: "2100 DA" } },
    { name: "Romaine", prices: { M: "600 DA", L: "1200 DA", XL: "2200 DA" } },
    { name: "Boisé", prices: { M: "650 DA", L: "1300 DA", XL: "2300 DA" } },
    { name: "4 Saison", prices: { M: "700 DA", L: "1400 DA", XL: "2400 DA" } },
    { name: "4 Fromage", prices: { M: "700 DA", L: "1400 DA", XL: "2400 DA" } },
    { name: "Compioné", prices: { M: "650 DA", L: "1300 DA", XL: "2400 DA" } },
    { name: "Chef", prices: { M: "700 DA", L: "1400 DA", XL: "2500 DA" } },
    { name: "Fumée", prices: { M: "700 DA", L: "1400 DA", XL: "2600 DA" } },
    { name: "Smile", prices: { M: "800 DA", L: "1600 DA", XL: "2600 DA" } },
    { name: "Couvert", prices: { M: "800 DA", L: "1600 DA" } },
    { name: "Venesia", prices: { M: "900 DA", L: "1800 DA" } },
    { name: "Capriccioza", prices: { M: "1000 DA", L: "1900 DA" } },
    { name: "Crevette", prices: { M: "1000 DA", L: "2000 DA" } }
  ],
  sandwichs: [
    { name: "Poulet Hachée", price: "200 DA" }, { name: "Spécial", price: "250 DA" },
    { name: "Spécial Doublé", price: "350 DA" }, { name: "Chawarma", price: "350 DA" },
    { name: "Mariné", price: "350 DA" }, { name: "Viande Hachée", price: "350 DA" },
    { name: "Libanais", price: "400 DA" }, { name: "Kebda", price: "400 DA" },
    { name: "Escalope à la crème", price: "450 DA" }, { name: "Mexicain", price: "450 DA" },
    { name: "Smile", price: "450 DA" }, { name: "Crispy", price: "550 DA" },
    { name: "Chessy Chiken", price: "600 DA" }, { name: "Mortadella", price: "650 DA" },
    { name: "Chiken & Crevette", price: "650 DA" }, { name: "Chessy Smile", price: "650 DA" }
  ],
  tacos: [
    { name: "Tacos Poulet", prices: { M: "500 DA", L: "650 DA" } },
    { name: "Tacos Chawarma", prices: { M: "500 DA", L: "650 DA" } },
    { name: "Tacos Viande", prices: { M: "600 DA", L: "750 DA" } },
    { name: "Tacos Mixte", prices: { M: "650 DA", L: "800 DA" } },
    { name: "Tacos Crispé", prices: { M: "650 DA", L: "800 DA" } },
    { name: "Gratiné (Supplément)", price: "100 DA" }
  ],
  burgers: [
    { name: "Burger", price: "250 DA" }, { name: "Cheese Burger", price: "350 DA" },
    { name: "Big Burger", price: "400 DA" }, { name: "Crispy Burger", price: "450 DA" },
    { name: "Burger Mixte", price: "550 DA" }
  ],
  plats: [
    { name: "Plat Spécial", price: "600 DA" }, { name: "Plat Kabab", price: "600 DA" },
    { name: "Plat Mariné", price: "650 DA" }, { name: "Plat Kebda", price: "700 DA" },
    { name: "Plat à la Crème", price: "700 DA" }, { name: "Plat Crispé", price: "800 DA" },
    { name: "Plat Mélange", price: "2000 DA" }
  ],
  gratines: [
    { name: "Gratiné Poulet", price: "500 DA" }, { name: "Gratiné Viande", price: "600 DA" },
    { name: "Gratiné Mixte", price: "650 DA" }
  ],
  poutine: [
    { name: "Poulet Pané", price: "650 DA" }, { name: "Mariné", price: "650 DA" },
    { name: "Mixte", price: "800 DA" }, { name: "Chiken & Crevette", price: "800 DA" }
  ],
  salade: [{ name: "Salade Smile", price: "600 DA" }],
  supplements: [{ name: "Tous les suppléments", price: "150 DA" }]
};

// كود العرض
let cart = [];
const menuDiv = document.getElementById('menu');

for (let cat in menu) {
    menuDiv.innerHTML += `<h2 class="section-title">${cat.toUpperCase()}</h2><div class="grid" id="${cat}"></div>`;
    menu[cat].forEach(item => {
        let priceText = item.price ? item.price : Object.entries(item.prices).map(p => `${p[0]}: ${p[1]}`).join(' | ');
        document.getElementById(cat).innerHTML += `
            <div class="card">
                <h3>${item.name}</h3>
                <p>${priceText}</p>
                <button onclick="addToCart('${item.name}')">Ajouter</button>
            </div>`;
    });
}

function addToCart(name) { cart.push(name); document.getElementById('cart-count').innerText = cart.length; alert(name + " ajouté !"); }
function showCart() { document.getElementById('cart-items').innerHTML = cart.join(', '); document.getElementById('modal').style.display = 'block'; }
function sendWhatsApp() { window.open(`https://wa.me/213549290971?text=Commande: ${cart.join(', ')}. Client: ${document.getElementById('name').value}, Addr: ${document.getElementById('address').value}`); }
