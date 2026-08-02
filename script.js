const menu = {
  pizzas: [
    { name: "Pizza Marguerite", prices: { M: "250,00DA", L: "500,00DA", XL: "1000,00DA" } },
    { name: "Pizza Royale", prices: { M: "350,00DA", L: "700,00DA", XL: "1300,00DA" } },
    { name: "Pizza Viande", prices: { M: "400,00DA", L: "800,00DA", XL: "1500,00DA" } },
    { name: "Pizza Poulet", prices: { M: "450,00DA", L: "900,00DA", XL: "1800,00DA" } },
    { name: "Pizza Sicilienne", prices: { M: "500,00DA", L: "1000,00DA", XL: "1900,00DA" } },
    { name: "Pizza Végétarien", prices: { M: "500,00DA", L: "1000,00DA", XL: "1900,00DA" } },
    { name: "Pizza Napolliaine", prices: { M: "550,00DA", L: "1100,00DA", XL: "2100,00DA" } },
    { name: "Pizza Romaine", prices: { M: "600,00DA", L: "1200,00DA", XL: "2200,00DA" } },
    { name: "Pizza Boisé", prices: { M: "650,00DA", L: "1300,00DA", XL: "2300,00DA" } },
    { name: "Pizza 4 Saison", prices: { M: "700,00DA", L: "1400,00DA", XL: "2400,00DA" } },
    { name: "Pizza 4 Fromage", prices: { M: "700,00DA", L: "1400,00DA", XL: "2400,00DA" } },
    { name: "Pizza Compioné", prices: { M: "650,00DA", L: "1300,00DA", XL: "2400,00DA" } },
    { name: "Pizza Chef", prices: { M: "700,00DA", L: "1400,00DA", XL: "2500,00DA" } },
    { name: "Pizza Fumée", prices: { M: "700,00DA", L: "1400,00DA", XL: "2600,00DA" } },
    { name: "Pizza Smile", prices: { M: "800,00DA", L: "1600,00DA", XL: "2600,00DA" } },
    { name: "Pizza Couvert", prices: { M: "800,00DA", L: "1600,00DA" } },
    { name: "Pizza Venesia", prices: { M: "900,00DA", L: "1800,00DA" } },
    { name: "Pizza Capriccioza", prices: { M: "1000,00DA", L: "1900,00DA" } },
    { name: "Pizza Crevette", prices: { M: "1000,00DA", L: "2000,00DA" } }
  ],
  plats: [
    { name: "Plat Spécial", price: "600,00DA" },
    { name: "Plat Kabab", price: "600,00DA" },
    { name: "Plat Mariné", price: "650,00DA" },
    { name: "Plat Kebda", price: "700,00DA" },
    { name: "Plat à la Crème", price: "700,00DA" },
    { name: "Plat Crispé", price: "800,00DA" },
    { name: "Plat Mélange", price: "2000,00DA" }
  ],
  sandwichs: [
    { name: "Poulet hachée", price: "200,00DA" },
    { name: "Spécial", price: "250,00DA" },
    { name: "Spécial Doublé", price: "350,00DA" },
    { name: "Chawarma", price: "350,00DA" },
    { name: "Mariné", price: "350,00DA" },
    { name: "Viande Haché", price: "350,00DA" },
    { name: "Libané", price: "400,00DA" },
    { name: "Kebda", price: "400,00DA" },
    { name: "Escalope à la crème", price: "450,00DA" },
    { name: "Mexicain", price: "450,00DA" },
    { name: "Smile", price: "450,00DA" },
    { name: "Crispy", price: "550,00DA" },
    { name: "Chessy Chiken", price: "600,00DA" },
    { name: "Mortadella", price: "650,00DA" },
    { name: "Chiken & Crevette", price: "650,00DA" },
    { name: "Chessy Smile", price: "650,00DA" }
  ],
  tacos: [
    { name: "Tacos Poulet", prices: { M: "500,00DA", L: "650,00DA" } },
    { name: "Tacos Chawarma", prices: { M: "500,00DA", L: "650,00DA" } },
    { name: "Tacos Viande", prices: { M: "600,00DA", L: "750,00DA" } },
    { name: "Tacos Mixte", prices: { M: "650,00DA", L: "800,00DA" } },
    { name: "Tacos Crispé", prices: { M: "650,00DA", L: "800,00DA" } },
    { name: "Gratiné", price: "100,00DA" }
  ],
  burger: [
    { name: "Burger", price: "250,00DA" },
    { name: "Cheese Burger", price: "350,00DA" },
    { name: "Big Burger", price: "400,00DA" },
    { name: "Crispy Burger", price: "450,00DA" },
    { name: "Burger mixte", price: "550,00DA" }
  ],
  gratines: [
    { name: "Gratine poulet", price: "500,00DA" },
    { name: "Gratine viande", price: "600,00DA" },
    { name: "Gratine Mixte", price: "650,00DA" }
  ],
  salade: [
    { name: "Salade Smile", price: "600,00DA" }
  ],
  poutine: [
    { name: "Poulet pané", price: "650,00DA" },
    { name: "Mariné", price: "650,00DA" },
    { name: "Mixte", price: "800,00DA" },
    { name: "Chiken & Crevette", price: "800,00DA" }
  ],
  supplements: {
      price: "150,00DA"
  }
};

let cart = [];

// دالة العرض (تأكد أن القائمة كاملة في الـ HTML)
function renderMenu() {
    const app = document.getElementById('menu-app');
    app.innerHTML = "";
    for (let cat in menu) {
        if (cat === "supplements") continue;
        app.innerHTML += `<h2>${cat.toUpperCase()}</h2><div class="grid" id="${cat}"></div>`;
        menu[cat].forEach(item => {
            let priceText = item.price ? item.price : Object.entries(item.prices).map(([s, p]) => `${s}: ${p}`).join(' | ');
            document.getElementById(cat).innerHTML += `
                <div class="card">
                    <h3>${item.name}</h3>
                    <p>${priceText}</p>
                    <button onclick="addToCart('${item.name}')">إضافة</button>
                </div>`;
        });
    }
}

function addToCart(name) {
    cart.push(name);
    document.getElementById('cart-count').innerText = cart.length;
}

function sendToWhatsApp() {
    // رقم الواتساب المحدث: 0779805210
    let msg = "أريد طلب: " + cart.join(", ");
    window.location.href = "https://wa.me/213779805210?text=" + encodeURIComponent(msg);
}

renderMenu();
