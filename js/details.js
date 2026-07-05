// ============================================================
// details.js — Car details page logic (NO EMI)
// ============================================================

const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id')) || 1;
const car = carData.find(c => c.id === carId);

const container = document.getElementById('detailsContent');

if (!car) {
    container.innerHTML = '<div style="text-align:center;padding:60px;color:rgba(255,255,255,0.3);">Car not found.</div>';
} else {
    renderDetails(car);
    updateWishlistCount();
}

function renderDetails(car) {
    const wishlisted = isInWishlist(car.id);
    const inCompare = isInCompare(car.id);
    const images = car.images || [car.image];

    container.innerHTML = `
        <div class="details-grid">
            <div class="details-gallery">
                <div class="main-img"><img src="${images[0]}" alt="${car.name}" id="detailMainImage" /></div>
                <div class="details-thumbs" id="detailThumbs">
                    ${images.map((img, i) => `<img src="${img}" alt="View ${i+1}" data-index="${i}" class="${i === 0 ? 'active' : ''}" />`).join('')}
                </div>
            </div>
            <div class="details-info">
                <h1>${car.name}</h1>
                <div class="price-large">₹${car.price.toLocaleString()} <small>MSRP</small></div>
                <p style="color:rgba(255,255,255,0.6);font-weight:300;line-height:1.8;margin-bottom:20px;">${car.description}</p>
                <div class="details-specs">
                    <div class="spec"><span class="label">Engine</span><span class="value">${car.engine}</span></div>
                    <div class="spec"><span class="label">Power</span><span class="value">${car.power}</span></div>
                    <div class="spec"><span class="label">Torque</span><span class="value">${car.torque}</span></div>
                    <div class="spec"><span class="label">Top Speed</span><span class="value">${car.topSpeed}</span></div>
                    <div class="spec"><span class="label">Transmission</span><span class="value">${car.transmission}</span></div>
                    <div class="spec"><span class="label">Fuel</span><span class="value">${car.fuel}</span></div>
                </div>
                <div class="details-features">${car.features.map(f => `<span class="tag">${f}</span>`).join('')}</div>
                <div class="details-features">${car.safety.map(f => `<span class="tag">${f}</span>`).join('')}</div>
                <div class="details-actions">
                    <button class="btn btn-primary" id="detailWishlistBtn"><i class="fas ${wishlisted ? 'fa-heart' : 'fa-heart'}"></i> ${wishlisted ? 'In Wishlist' : 'Add to Wishlist'}</button>
                    <button class="btn btn-outline" id="detailCompareBtn"><i class="fas fa-${inCompare ? 'minus' : 'plus'}"></i> ${inCompare ? 'Remove from Compare' : 'Add to Compare'}</button>
                </div>
                <!-- EMI CALCULATOR REMOVED -->
            </div>
        </div>
        <div class="similar-cars">
            <h3 style="font-size:24px;font-weight:600;margin-bottom:20px;">Similar <span style="color:var(--bmw-blue);">Cars</span></h3>
            <div class="cars-grid" id="similarCarsGrid"></div>
        </div>
    `;

    // Thumbnails
    const thumbImgs = container.querySelectorAll('#detailThumbs img');
    const mainImg = document.getElementById('detailMainImage');
    thumbImgs.forEach(img => {
        img.addEventListener('click', () => {
            thumbImgs.forEach(t => t.classList.remove('active'));
            img.classList.add('active');
            mainImg.src = img.src;
        });
    });

    // Wishlist
    document.getElementById('detailWishlistBtn').addEventListener('click', () => {
        toggleWishlist(car.id);
        renderDetails(car);
        updateWishlistCount();
    });

    // Compare
    document.getElementById('detailCompareBtn').addEventListener('click', () => {
        toggleCompare(car.id);
        renderDetails(car);
    });

    // Similar Cars
    const similar = carData.filter(c => c.id !== car.id && c.fuel === car.fuel).slice(0, 3);
    const similarGrid = document.getElementById('similarCarsGrid');
    if (similar.length) {
        similarGrid.innerHTML = similar.map(c => buildCarCard(c)).join('');
        attachCardEvents(similarGrid);
    } else {
        similarGrid.innerHTML = '<p style="color:rgba(255,255,255,0.3);">No similar cars found.</p>';
    }
}

function buildCarCard(car) {
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
                <div class="price">₹${car.price.toLocaleString()} <small>MSRP</small></div>
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

function attachCardEvents(container) {
    container.querySelectorAll('.car-card-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleWishlist(id);
            renderDetails(carData.find(c => c.id === carId));
            updateWishlistCount();
        });
    });

    container.querySelectorAll('[data-action="compare"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleCompare(id);
            renderDetails(carData.find(c => c.id === carId));
        });
    });
}