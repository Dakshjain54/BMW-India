// ============================================================
// wishlist.js — Wishlist page logic
// ============================================================

const container = document.getElementById('wishlistContent');

function renderWishlist() {
    const wishlist = getWishlist();
    if (!wishlist.length) {
        container.innerHTML = `
            <div class="wishlist-empty">
                <i class="fas fa-heart"></i>
                <h3>Your wishlist is empty</h3>
                <p style="color:rgba(255,255,255,0.3);">Start exploring our collection and save your favorites.</p>
                <a href="cars.html" class="btn btn-primary" style="margin-top:20px;">Explore Cars</a>
            </div>
        `;
        return;
    }

    const cars = carData.filter(c => wishlist.includes(c.id));
    const grid = document.createElement('div');
    grid.className = 'wishlist-grid';
    grid.innerHTML = cars.map(c => buildWishlistCard(c)).join('');
    container.innerHTML = '';
    container.appendChild(grid);
    attachWishlistEvents(grid);
}

function buildWishlistCard(car) {
    const wishlisted = isInWishlist(car.id);
    const inCompare = isInCompare(car.id);
    return `
        <div class="car-card" data-id="${car.id}">
            <div class="car-card-img">
                <img src="${car.image}" alt="${car.name}" loading="lazy" />
                <button class="car-card-wishlist ${wishlisted ? 'active' : ''}" data-id="${car.id}">
                    <i class="fas ${wishlisted ? 'fa-heart' : 'fa-heart'}"></i>
                </button>
            </div>
            <div class="car-card-body">
                <h3>${car.name}</h3>
                <span class="model">${car.model} · ${car.year}</span>
                <div class="price">$${car.price.toLocaleString()} <small>MSRP</small></div>
                <div class="car-card-specs">
                    <span><i class="fas fa-tachometer-alt"></i> ${car['0-60']}</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <div style="display:flex;gap:8px;margin-top:12px;">
                    <a href="details.html?id=${car.id}" class="btn btn-primary" style="padding:10px;font-size:11px;flex:1;">
                        <i class="fas fa-eye"></i> View
                    </a>
                    <button class="btn btn-outline" style="padding:10px;font-size:11px;flex:1;" data-action="compare" data-id="${car.id}">
                        <i class="fas fa-${inCompare ? 'minus' : 'plus'}"></i> ${inCompare ? 'Remove' : 'Compare'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function attachWishlistEvents(grid) {
    grid.querySelectorAll('.car-card-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleWishlist(id);
            renderWishlist();
            updateWishlistCount();
        });
    });

    grid.querySelectorAll('[data-action="compare"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleCompare(id);
            renderWishlist();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderWishlist();
    updateWishlistCount();
});