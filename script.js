// بيانات القائمة الشاملة (مستخرجة بالكامل من صور منيو Pizzeria Smile)
const menuData = {
    pizzas: [
        { name: "Pizza Marguerite", desc: "Sauce Tomate, Fromage, Olive.", prices: "M:250 | L:500 | XL:1000 DA" },
        { name: "Pizza Royale", desc: "Sauce Tomate, Fromage, Poulet Hachée, Olive.", prices: "M:350 | L:700 | XL:1300 DA" },
        { name: "Pizza Viande", desc: "Sauce Tomate, Fromage, Viande Hachée, Olive.", prices: "M:400 | L:800 | XL:1500 DA" },
        { name: "Pizza Poulet", desc: "Sauce Tomate, Poulet, Olive.", prices: "M:450 | L:900 | XL:1800 DA" },
        { name: "Pizza Sicilienne", desc: "Sauce Tomate, Fromage, Thon, Olive.", prices: "M:500 | L:1000 | XL:1900 DA" },
        { name: "Pizza Végétarien", desc: "Fromage, Champignon, Poivron, Oignon, Maïs, Olive.", prices: "M:500 | L:1000 | XL:1900 DA" },
        { name: "Pizza Napolliaine", desc: "Sauce Tomate, Fromage, Champignon, Viande Hachée, Olive.", prices: "M:550 | L:1100 | XL:2100 DA" },
        { name: "Pizza Romaine", desc: "Sauce Tomate, Fromage, Demi-Poulet, Demi-Viande Hachée, Cheddar, Olive.", prices: "M:600 | L:1200 | XL:2200 DA" },
        { name: "Pizza Boisé", desc: "Sauce Blanche, Fromage, Poulet, Cheddar, Olive.", prices: "M:650 | L:1300 | XL:2300 DA" },
        { name: "Pizza 4 Saison", desc: "Poulet, Champignon, Thon, Olive.", prices: "M:700 | L:1400 | XL:2400 DA" },
        { name: "Pizza 4 Fromage", desc: "Sauce Blanche, Fromage Fondu, Cheddar, Gouda, Camembert, Olive.", prices: "M:700 | L:1400 | XL:2400 DA" },
        { name: "Pizza Compioné", desc: "Sauce Tomate, Viande Hachée, Mozzarella, Cheddar, Olive.", prices: "M:650 | L:1300 | XL:2400 DA" },
        { name: "Pizza Chef", desc: "Sauce Tomate, Fromage, Viande Hachée, Kebab, Cheddar, Olive.", prices: "M:700 | L:1400 | XL:2500 DA" },
        { name: "Pizza Fumée", desc: "Sauce Tomate, Rôti Fumée, Mozzarella, Cheddar, Olive.", prices: "M:700 | L:1400 | XL:2600 DA" },
        { name: "Pizza Smile", desc: "Sauce Tomate, Fromage, Poulet, Viande Hachée, Cheddar, Olive, avec bordure Fromage.", prices: "M:800 | L:1600 | XL:2600 DA" },
        { name: "Pizza Couvert", desc: "Sauce Tomate, Poulet, Fromage Fondu, Cheddar, Olive.", prices: "M:800 | L:1600 DA" },
        { name: "Pizza Venesia", desc: "Sauce Tomate, Poulet, Viande Hachée, Mozzarella, Cheddar, Olive.", prices: "M:900 | L:1800 DA" },
        { name: "Pizza Capriccioza", desc: "Sauce Tomate, Poulet, Viande Hachée, Mozzarella, Cheddar, Olive, Avec Bordure Fromage.", prices: "M:1000 | L:1900 DA" },
        { name: "Pizza Crevette", desc: "Sauce Tomate, Fromage, Crevette, Cheddar, Olive.", prices: "M:1000 | L:2000 DA" }
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
        { name: "Tacos Poulet", desc: "Garni", prices: "M:500 | L:650 DA" },
        { name: "Tacos Chawarma", desc: "Garni", prices: "M:500 | L:650 DA" },
        { name: "Tacos Viande", desc: "Garni", prices: "M:600 | L:750 DA" },
        { name: "Tacos Mixte", desc: "Garni", prices: "M:650 | L:800 DA" },
        { name: "Tacos Crispé", desc: "Garni", prices: "M:650 | L:800 DA" }
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

// روابط الصور الافتراضية لكل تصنيف (يمكنك تغييرها لاحقاً لصور الأطباق الحقيقية)
const defaultImages = {
    pizzas: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    sandwichs: "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=500&q=80",
    burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    tacos: "https://images.unsplash.com/photo-1662483526685-6ff83637eab8?w=500&q=80",
    gratines: "https://images.unsplash.com/photo-1619895092538-128341789043?w=500&q=80", // تم تغيير رابط الغراتان هنا
    poutine: "https://images.unsplash.com/photo-1586805608485-add336722759?w=500&q=80",
    plats: "https://images.unsplash.com/photo-1544025162-8315ea07525b?w=500&q=80",
    salades: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80"
};

   

let cartCount = 0;

// دالة تحديث وعرض القائمة بناءً على التصنيف
function filterMenu(category) {
    // تحديث الزر النشط في التصنيفات
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // إذا كان هناك حدث نقر، قم بتفعيله
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    const container = document.getElementById('menu-container');
    if(!container) return; // حماية من الأخطاء إذا لم يكتمل تحميل الصفحة
    container.innerHTML = ''; // تفريغ المحتوى الحالي

    // التأكد من أن التصنيف موجود لتجنب الأخطاء
    const items = menuData[category] || [];
    
    items.forEach(item => {
        const productHtml = `
            <div class="menu-item">
                <img src="${defaultImages[category]}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="desc">${item.desc}</p>
                <div class="price-list">${item.prices}</div>
                <button class="btn-add" onclick="addToCart(event)">+ AJOUTER</button>
            </div>
        `;
        container.innerHTML += productHtml;
    });
}

// دالة إضافة للسلة
function addToCart(event) {
    cartCount++;
    const cartCountElement = document.getElementById('cart-count');
    if(cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
    
    // تأثير مرئي بسيط على الزر
    const btn = event.target;
    btn.innerHTML = "<i class='fa-solid fa-check'></i> AJOUTÉ";
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "#fff";
    
    setTimeout(() => {
        btn.innerHTML = "+ AJOUTER";
        btn.style.backgroundColor = "";
        btn.style.color = "";
    }, 1500);
}

// تحميل القائمة الافتراضية (البيتزا) عند فتح الموقع
window.onload = () => {
    filterMenu('pizzas');
    // تحديد أول بطاقة (البيتزا) كنشطة
    const firstCategory = document.querySelector('.category-card');
    if(firstCategory) {
        firstCategory.classList.add('active');
    }
};
// تفعيل القائمة الجانبية (Mobile Menu)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " ajouté !");
}

function showCart() {
    let modal = document.getElementById('cart-modal');
    let itemsDiv = document.getElementById('cart-items');
    let total = 0;
    itemsDiv.innerHTML = '';
    
    cart.forEach(item => {
        itemsDiv.innerHTML += `<p>${item.name} - ${item.price} DA</p>`;
        total += parseInt(item.price);
    });
    
    document.getElementById('cart-total').innerText = total;
    modal.style.display = 'block';
}

function sendOrderWhatsApp() {
    let phone = document.getElementById('customer-phone').value;
    let address = document.getElementById('customer-address').value;
    let total = document.getElementById('cart-total').innerText;
    
    if(!phone || !address) { alert("Veuillez remplir le téléphone et l'adresse"); return; }
    
    let msg = `Nouvelle commande:%0A`;
    cart.forEach(item => msg += `- ${item.name} (${item.price} DA)%0A`);
    msg += `%0A*Total: ${total} DA*%0A*Téléphone:* ${phone}%0A*Adresse:* ${address}`;
    
    window.open(`https://wa.me/213549290971?text=${msg}`, '_blank');
}
// داخل دالة filterMenu
<button class="btn-add" onclick="addToCart('${item.name}', '${item.prices.split(':')[1].split(' ')[0]}')">+ AJOUTER</button>

