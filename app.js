app.js
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

function showPage(id){
pages.forEach(p => p.classList.toggle("active", p.id === id));
tabs.forEach(t => t.classList.toggle("active", t.dataset.page === id));
window.scrollTo({top:0, behavior:"smooth"});
}

tabs.forEach(t => t.addEventListener("click", () => showPage(t.dataset.page)));

document.querySelectorAll("[data-go]").forEach(btn => {
btn.addEventListener("click", () => showPage(btn.dataset.go));
});

// --- MENU DATA (à modifier plus tard) ---
const menuData = [
{ title: "Entrées", items: [
{ name: "Exemple entrée", price: "8€" },
]},
{ title: "Plats", items: [
{ name: "Exemple plat", price: "16€" },
]},
{ title: "Pizzas", items: [
{ name: "Margherita", price: "12€" },
{ name: "4 Fromages", price: "14€" },
]},
{ title: "Desserts", items: [
{ name: "Tiramisu", price: "7€" },
]},
{ title: "Boissons", items: [
{ name: "Soda", price: "3.5€" },
{ name: "Café", price: "2€" },
]},
];

const menuList = document.getElementById("menuList");
menuList.innerHTML = menuData.map(section => `
<div class="card" style="margin:12px 0;">
<h3 style="margin:0 0 10px;">${section.title}</h3>
<div>
${section.items.map(i => `
<div style="display:flex; justify-content:space-between; gap:12px; padding:8px 0; border-top:1px solid rgba(255,255,255,.06);">
<span>${i.name}</span>
<strong>${i.price}</strong>
</div>
`).join("")}
</div>
</div>
`).join("");
