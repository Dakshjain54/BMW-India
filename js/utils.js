// ============================================================
// utils.js — Shared utilities (Wishlist, Compare, Toast, etc.)
// ============================================================

// ---------- WISHLIST ----------
function getWishlist() {
    try { return JSON.parse(localStorage.getItem('m_wishlist')) || []; } catch { return []; }
}

function setWishlist(list) {
    localStorage.setItem('m_wishlist', JSON.stringify(list));
    updateWishlistCount();
}

function toggleWishlist(carId) {
    let list = getWishlist();
    const idx = list.indexOf(carId);
    if (idx > -1) {
        list.splice(idx, 1);
        showToast('Removed from wishlist', 'error');
    } else {
        list.push(carId);
        showToast('Added to wishlist ♥', 'success');
    }
    setWishlist(list);
    return list;
}

function isInWishlist(carId) {
    return getWishlist().includes(carId);
}

function updateWishlistCount() {
    const count = getWishlist().length;
    const el = document.getElementById('wishlistCount');
    if (el) el.textContent = count;
}

const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");
const glow = document.getElementById("cursorGlow");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

});

function animate() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    glow.style.left = ringX + "px";
    glow.style.top = ringY + "px";

    requestAnimationFrame(animate);

}

animate();

document.querySelectorAll("a,button,.btn,.car-card,input,select").forEach(el => {

    el.addEventListener("mouseenter", () => {

        ring.classList.add("hover");
        glow.classList.add("hover");
        dot.classList.add("hover");

    });

    el.addEventListener("mouseleave", () => {

        ring.classList.remove("hover");
        glow.classList.remove("hover");
        dot.classList.remove("hover");

    });

});

document.addEventListener("mousedown", () => {

    ring.classList.add("click");
    dot.classList.add("click");

});

document.addEventListener("mouseup", () => {

    ring.classList.remove("click");
    dot.classList.remove("click");

});
// ---------- COMPARE ----------
function getCompareList() {
    try { return JSON.parse(localStorage.getItem('m_compare')) || []; } catch { return []; }
}

function setCompareList(list) {
    localStorage.setItem('m_compare', JSON.stringify(list));
}

function toggleCompare(carId) {
    let list = getCompareList();
    const idx = list.indexOf(carId);
    if (idx > -1) {
        list.splice(idx, 1);
        showToast('Removed from compare', 'info');
    } else {
        if (list.length >= 4) {
            showToast('Maximum 4 cars to compare', 'error');
            return list;
        }
        list.push(carId);
        showToast('Added to compare', 'success');
    }
    setCompareList(list);
    return list;
}

function isInCompare(carId) {
    return getCompareList().includes(carId);
}

// ---------- TOAST ----------
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

// ---------- RIPPLE ----------
function createRipple(e) {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// ===== LOADER =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 400);

    }, 800);
});