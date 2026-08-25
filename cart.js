
const CART_KEY = 'beanbound_cart';


function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
}

function addToCart(item, qty = 1) {
    if (!item || !item.id) return;
    const cart = getCart();
    const existing = cart.find(i => i.id === item.id);
    const maxStock = item.stock || 999;

    if (existing) {
        existing.qty = Math.min(existing.qty + qty, maxStock);
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            stock: maxStock,
            qty: Math.min(qty, maxStock)
        });
    }
    saveCart(cart);
    openCart();
}

function removeFromCart(id) {
    const cart = getCart().filter(i => i.id !== id);
    saveCart(cart);
}

function updateCartQty(id, qty) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (qty <= 0) {
        removeFromCart(id);
        return;
    }
    item.qty = Math.min(qty, item.stock || 999);
    saveCart(cart);
}

function cartTotalCount() {
    return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotalPrice() {
    return getCart().reduce((sum, i) => sum + i.qty * i.price, 0);
}

// ---------- UI: badge on the cart icon ----------
function updateCartBadge() {
    const count = cartTotalCount();
    document.querySelectorAll('.cart-badge').forEach(badge => {
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
    });
}

// ---------- UI: slide-out drawer ----------
function injectCartDrawer() {
    if (document.getElementById('cartDrawer')) return;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <div id="cartOverlay" class="fixed inset-0 bg-black/50 z-40 hidden"></div>
    <div id="cartDrawer" class="fixed top-0 right-0 h-full w-full max-w-sm bg-coffee-foam z-50 shadow-2xl translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
        <div class="flex items-center justify-between p-5 bg-coffee-espresso text-white">
            <div class="font-bold text-xl">ตะกร้าสินค้า</div>
            <button id="closeCartBtn" class="text-3xl leading-none hover:text-coffee-cream cursor-pointer">&times;</button>
        </div>
        <div id="cartItemsContainer" class="flex-1 overflow-y-auto p-4 flex flex-col gap-4"></div>
        <div class="p-5 border-t border-coffee-espresso/20 bg-white">
            <div class="flex justify-between font-bold text-coffee-espresso text-lg mb-4">
                <span>รวมทั้งหมด</span>
                <span id="cartTotalPrice">0 บาท</span>
            </div>
            <button class="w-full bg-coffee-espresso text-white py-3 hover:bg-coffee-espresso/80 active:scale-95 transition cursor-pointer">สั่งซื้อทันที</button>
        </div>
    </div>`;
    document.body.appendChild(wrapper);

    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
}

function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center text-coffee-espresso/60 mt-10">ยังไม่มีสินค้าในตะกร้า</div>`;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="flex gap-3 items-center border-b border-coffee-espresso/10 pb-4">
                <img src="${item.img}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg flex-shrink-0">
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-bold text-coffee-espresso truncate">${item.name}</div>
                    <div class="text-coffee-espresso/70 text-sm">${item.price.toLocaleString()} บาท</div>
                    <div class="flex items-center gap-2 mt-1">
                        <button class="cart-minus w-6 h-6 border border-coffee-espresso flex items-center justify-center hover:bg-coffee-cream cursor-pointer" data-id="${item.id}">-</button>
                        <span class="w-6 text-center">${item.qty}</span>
                        <button class="cart-plus w-6 h-6 border border-coffee-espresso flex items-center justify-center hover:bg-coffee-cream cursor-pointer" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="cart-remove text-red-500 hover:text-red-700 text-sm cursor-pointer" data-id="${item.id}">ลบ</button>
            </div>
        `).join('');

        container.querySelectorAll('.cart-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = getCart().find(i => i.id === btn.dataset.id);
                if (item) updateCartQty(item.id, item.qty + 1);
            });
        });
        container.querySelectorAll('.cart-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = getCart().find(i => i.id === btn.dataset.id);
                if (item) updateCartQty(item.id, item.qty - 1);
            });
        });
        container.querySelectorAll('.cart-remove').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
    }

    const totalEl = document.getElementById('cartTotalPrice');
    if (totalEl) totalEl.textContent = cartTotalPrice().toLocaleString() + ' บาท';
}

function openCart() {
    injectCartDrawer();
    renderCartItems();
    document.getElementById('cartDrawer').classList.remove('translate-x-full');
    document.getElementById('cartOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) drawer.classList.add('translate-x-full');
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// ---------- Init on every page ----------
function initCartUI() {
    injectCartDrawer();
    updateCartBadge();

    document.querySelectorAll('.cart-icon-btn').forEach(btn => {
        btn.addEventListener('click', openCart);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCart();
    });
}

document.addEventListener('DOMContentLoaded', initCartUI);
