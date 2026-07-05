// ============================================================
// compare.js — Compare page logic
// ============================================================

const container = document.getElementById('compareContent');

function renderCompare() {
    const compare = getCompareList();
    if (!compare.length) {
        container.innerHTML = `
            <div class="compare-empty">
                <i class="fas fa-sliders-h"></i>
                <h3>No cars to compare</h3>
                <p style="color:rgba(255,255,255,0.3);">Add up to 4 cars from the collection.</p>
                <a href="cars.html" class="btn btn-primary" style="margin-top:20px;">Browse Cars</a>
            </div>
        `;
        return;
    }

    const cars = carData.filter(c => compare.includes(c.id));
    const grid = document.createElement('div');
    grid.className = 'compare-grid';
    grid.innerHTML = cars.map(c => `
        <div class="compare-card">
            <img src="${c.image}" alt="${c.name}" loading="lazy" />
            <h4>${c.name}</h4>
            <div class="price">₹${c.price.toLocaleString()}</div>
            <ul class="spec-list">
                <li><span>Engine</span><span class="val">${c.engine}</span></li>
                <li><span>Power</span><span class="val">${c.power}</span></li>
                <li><span>torque</span><span class="val">${c.torque}</span></li>
                <li><span>Top Speed</span><span class="val">${c.topSpeed}</span></li>
                <li><span>Fuel</span><span class="val">${c.fuel}</span></li>
                <li><span>Transmission</span><span class="val">${c.transmission}</span></li>
            </ul>
            <button class="remove-compare" data-id="${c.id}"><i class="fas fa-times"></i> Remove</button>
        </div>
    `).join('');
    container.innerHTML = '';
    container.appendChild(grid);

    grid.querySelectorAll('.remove-compare').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            toggleCompare(id);
            renderCompare();
            updateWishlistCount();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCompare();
    updateWishlistCount();
});