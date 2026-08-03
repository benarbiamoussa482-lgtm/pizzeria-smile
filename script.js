const menu = {
    pizzas: [
        { name: "Pizza Marguerite", prices: { M: 250, L: 500, XL: 1000 } },
        { name: "Pizza Royale", prices: { M: 350, L: 700, XL: 1300 } },
        { name: "Pizza Viande", prices: { M: 400, L: 800, XL: 1500 } },
        { name: "Pizza Poulet", prices: { M: 450, L: 900, XL: 1800 } },
        { name: "Pizza Sicilienne", prices: { M: 500, L: 1000, XL: 1900 } },
        { name: "Pizza Végétarien", prices: { M: 500, L: 1000, XL: 1900 } },
        { name: "Pizza Napolliaine", prices: { M: 550, L: 1100, XL: 2100 } },
        { name: "Pizza Romaine", prices: { M: 600, L: 1200, XL: 2200 } },
        { name: "Pizza Boisé", prices: { M: 650, L: 1300, XL: 2300 } },
        { name: "Pizza 4 Saison", prices: { M: 700, L: 1400, XL: 2400 } },
        { name: "Pizza 4 Fromage", prices: { M: 700, L: 1400, XL: 2400 } },
        { name: "Pizza Compioné", prices: { M: 650, L: 1300, XL: 2400 } },
        { name: "Pizza Chef", prices: { M: 700, L: 1400, XL: 2500 } },
        { name: "Pizza Fumée", prices: { M: 700, L: 1400, XL: 2600 } },
        { name: "Pizza Smile", prices: { M: 800, L: 1600, XL: 2600 } },
        { name: "Pizza Couvert", prices: { M: 800, L: 1600 } },
        { name: "Pizza Venesia", prices: { M: 900, L: 1800 } },
        { name: "Pizza Capriccioza", prices: { M: 1000, L: 1900 } },
        { name: "Pizza Crevette", prices: { M: 1000, L: 2000 } }
    ],
    sandwichs: [
        { name: "Poulet hachée", price: 200 },
        { name: "Spécial", price: 250 },
        { name: "Spécial Doublé", price: 350 },
        { name: "Chawarma", price: 350 },
        { name: "Mariné", price: 350 },
        { name: "Viande Haché", price: 350 },
        { name: "Libané", price: 400 },
        { name: "Kebda", price: 400 },
        { name: "Escalope à la crème", price: 450 },
        { name: "Mexicain", price: 450 },
        { name: "Smile", price: 450 },
        { name: "Crispy", price: 550 },
        { name: "Chessy Chiken", price: 600 },
        { name: "Mortadella", price: 650 },
        { name: "Chiken & Crevette", price: 650 },
        { name: "Chessy Smile", price: 650 }
    ],
    tacos: [
        { name: "Tacos Poulet", prices: { M: 500, L: 650 } },
        { name: "Tacos Chawarma", prices: { M: 500, L: 650 } },
        { name: "Tacos Viande", prices: { M: 600, L: 750 } },
        { name: "Tacos Mixte", prices: { M: 650, L: 800 } },
        { name: "Tacos Crispé", prices: { M: 650, L: 800 } },
        { name: "Gratiné", price: 100 }
    ],
    burger: [
        { name: "Burger", price: 250 },
        { name: "Cheese Burger", price: 350 },
        { name: "Big Burger", price: 400 },
        { name: "Crispy Burger", price: 450 },
        { name: "Burger mixte", price: 550 }
    ],
    plats: [
        { name: "Plat Spécial", price: 600 },
        { name: "Plat Kabab", price: 600 },
        { name: "Plat Mariné", price: 650 },
        { name: "Plat Kebda", price: 700 },
        { name: "Plat à la Crème", price: 700 },
        { name: "Plat Cripé", price: 800 },
        { name: "Plat Mélange", price: 2000 }
    ],
    gratinés: [
        { name: "Gratiné Poulet", price: 500 },
        { name: "Gratiné Viande", price: 600 },
        { name: "Gratiné Mixte", price: 650 }
    ],
    poutine: [
        { name: "Poulet pané", price: 650 },
        { name: "Mariné", price: 650 },
        { name: "Mixte", price: 800 },
        { name: "Chiken & Crevette", price: 800 }
    ],
    salade: [
        { name: "Salade Smile", price: 600 }
    ]
};

let cart = [];
const whatsappNumber = "213779805210";

function renderMenu(categoryFilter = 'all') {
    const display = document.getElementById('menu-display');
    display.innerHTML = '';

    for (let cat in menu) {
        if (categoryFilter !== 'all' && categoryFilter !== cat) continue;

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'section-title';
        categoryTitle.innerText = cat.toUpperCase();
        display.appendChild(categoryTitle);

        menu[cat].forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'food-card';

            let actionHtml = '';
            if (item.prices) {
                let options = Object.keys(item.prices).map(size => `<option value="${size}">${size} - ${item.prices[size]} DA</option>`).join('');
                actionHtml = `
                    <div class="food-action">
                        <select class="size-select" id="select-${cat}-${index}">
                            ${options}
                        </select>
                        <button class="add-btn" onclick="addToCartWithOptions('${item.name}', '${cat}', ${index})">إضافة +</button>
                    </div>
                `;
            } else {
                actionHtml = `
                    <div class="food-action">
                        <span class="price-badge">${item.price} DA</span>
                        <button class="add-btn" onclick="addToCartSimple('${item.name}', ${item.price})">إضافة +</button>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="food-info">
                    <div class="food-title">${item.name}</div>
                </div>
                ${actionHtml}
            `;
            display.appendChild(card);
        });
    }
}

function addToCartSimple(name, price) {
    cart.push({ name, price: parseInt(price), details: '' });
    updateCartUI();
}

function addToCartWithOptions(name, cat, index) {
    const selectElement = document.getElementById(`select-${cat}-${index}`);
    const selectedSize = selectElement.value;
    const price = menu[cat][index].prices[selectedSize];
    
    cart.push({ 
        name: `${name} (${selectedSize})`, 
        price: parseInt(price),
        details: `الحجم: ${selectedSize}`
    });
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888; padding:20px;">السلة فارغة حالياً</p>';
        document.getElementById('cart-total-price').innerText = '0 DA';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <div>${item.name}</div>
                <div class="cart-item-price">${item.price} DA</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">🗑️</button>
        `;
        container.appendChild(div);
    });

    document.getElementById('cart-total-price').innerText = `${total} DA`;
}

function toggleCartModal() {
    document.getElementById('cart-modal').classList.toggle('open');
}

function filterCategory(cat, element) {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
    element.classList.add('active');
    renderMenu(cat);
}

function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert('الرجاء إضافة بعض الأصناف إلى السلة أولاً!');
        return;
    }

    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const address = document.getElementById('client-address').value.trim();

    if (!name || !phone || !address) {
        alert('الرجاء ملء كافة معلومات التوصيل (الاسم، الهاتف، العنوان)');
        return;
    }

    let total = document.getElementById('cart-total-price').innerText;
    let orderList = cart.map((item, i) => `${i + 1}. ${item.name} - ${item.price} DA`).join('%0A');

    let message = `*طلب جديد من موقع Pizzeria Smile* 🍕%0A%0A` +
                  `*الزبون:* ${name}%0A` +
                  `*الهاتف:* ${phone}%0A` +
                  `*العنوان:* ${address}%0A%0A` +
                  `*تفاصيل الطلبية:*%0A${orderList}%0A%0A` +
                  `*المجموع الكلي:* ${total}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// تشغيل القائمة تلقائياً عند تحميل الصفحة
renderMenu();
