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
    { name: "Plat Crispé", price: 800 },
    { name: "Plat Mélange", price: 2000 }
  ],
  gratines: [
    { name: "Gratiné Poulet", price: 500 },
    { name: "Gratiné Viande", price: 600 },
    { name: "Gratiné Mixte", price: 650 }
  ],
  poutine: [
    { name: "Poutine Poulet pané", price: 650 },
    { name: "Poutine Mariné", price: 650 },
    { name: "Poutine Mixte", price: 800 },
    { name: "Poutine Chiken & Crevette", price: 800 }
  ],
  salade: [
    { name: "Salade Smile", price: 600 }
  ]
};

    // 2. دالة العرض (التي تظهر القائمة للزبون)
function showMenu(category) {
    const container = document.getElementById('menu-display');
    const items = menuData[category];
    
    // مسح المحتوى القديم وعرض الجديد
    container.innerHTML = `<h2>${category}</h2>`;
    items.forEach(item => {
        container.innerHTML += `
            <div style="padding:10px; border-bottom:1px solid #eee; display:flex; justify-content:space-between;">
                <span>${item.name}</span>
                <strong>${item.price}</strong>
            </div>`;
    });
}
</script>

