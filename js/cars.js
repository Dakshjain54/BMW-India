// ============================================================
// cars.js — Cars listing page logic
// ============================================================

let currentPage = 1;
const perPage = 18;
let filteredCars = [...carData];
let currentView = 'grid';

const grid = document.getElementById('carsGrid');
const pagination = document.getElementById('pagination');

// ---------- BUILD CARD ----------
function buildCarCard(car) {
    const wishlisted = isInWishlist(car.id);
    const inCompare = isInCompare(car.id);
    return `
        <div class="car-card" data-id="${car.id}">
            <div class="car-card-img">
                <img src="${car.image}" alt="${car.name}" loading="lazy" />
                ${car.badge ? `<span class="car-card-badge ${car.badge}">${car.badge}</span>` : ''}
                <button class="car-card-wishlist ${wishlisted ? 'active' : ''}" data-id="${car.id}">
                    <i class="fas ${wishlisted ? 'fa-heart' : 'fa-heart'}"></i>
                </button>
            </div>
            <div class="car-card-body">
                <h3>${car.name}</h3>
                <div class="price">₹${car.price.toLocaleString()} <small>MSRP</small></div>
                <div class="car-card-specs">
                    <span><i class="fas fa-tachometer-alt"></i> ${car.topSpeed}</span>
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

function attachCardEvents(container) {
    container.querySelectorAll('.car-card-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleWishlist(id);
            renderAll();
            updateWishlistCount();
        });
    });

    container.querySelectorAll('[data-action="compare"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleCompare(id);
            renderAll();
        });
    });
}

// ---------- RENDER ----------
function renderCars(cars, page = 1) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginated = cars.slice(start, end);

    if (!paginated.length) {
        grid.innerHTML =
            `<div style="text-align:center;padding:60px 20px;color:rgba(255,255,255,0.3);"><i class="fas fa-car" style="font-size:40px;opacity:0.2;display:block;margin-bottom:16px;"></i>No cars found.</div>`;
        return;
    }

    grid.className = `cars-grid ${currentView === 'list' ? 'list-view' : ''}`;
    if (currentView === 'list') grid.style.gridTemplateColumns = '1fr';
    else grid.style.gridTemplateColumns = '';

    grid.innerHTML = paginated.map(c => buildCarCard(c)).join('');
    attachCardEvents(grid);
}

function renderPagination(total, current) {
    const pages = Math.ceil(total / perPage);
    if (pages <= 1) { pagination.innerHTML = ''; return; }
    let html = '';
    for (let i = 1; i <= pages; i++) {
        html += `<button class="${i === current ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = html;
    pagination.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            renderAll();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function filterAndSort() {
    const search = document.getElementById('carSearch').value.toLowerCase();
    const priceFilter = document.getElementById('filterPrice').value;
    const fuelFilter = document.getElementById('filterFuel').value;
    const transFilter = document.getElementById('filterTrans').value;
    const sort = document.getElementById('sortCars').value;

    let filtered = carData.filter(c => {
        const matchName = [
            c.name,
            c.engine,
            c.fuel,
            c.transmission,
            c.description
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(search);

        let matchPrice = true;

        if (priceFilter !== "all") {

            let price = c.price
                .replace("₹", "")
                .replace("Crore", "")
                .replace("Lakh", "")
                .replace(/,/g, "")
                .trim();

            if (c.price.includes("Crore")) {
                price = parseFloat(price) * 100;
            } else {
                price = parseFloat(price);
            }

            switch (priceFilter) {

                case "0-50":
                    matchPrice = price < 50;
                    break;

                case "50-100":
                    matchPrice = price >= 50 && price < 100;
                    break;

                case "100-150":
                    matchPrice = price >= 100 && price < 150;
                    break;

                case "150+":
                    matchPrice = price >= 150;
                    break;

                default:
                    matchPrice = true;

            }

        }
        const matchFuel = fuelFilter === 'all' || c.fuel === fuelFilter;
        const transmission = c.transmission.toLowerCase();

        const matchTrans =
            transFilter === "all" ||
            transmission.includes(transFilter.toLowerCase());
        return matchName && matchPrice && matchFuel && matchTrans;
    });

    function getPriceValue(price) {

        let value = price
            .replace("₹", "")
            .replace(/,/g, "")
            .trim();

        if (value.includes("Crore")) {
            return parseFloat(value.replace("Crore", "").trim()) * 100;
        }

        if (value.includes("Lakh")) {
            return parseFloat(value.replace("Lakh", "").trim());
        }

        return parseFloat(value) || 0;
    }

    if (sort === "price-asc") {

        filtered.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));

    }
    else if (sort === "price-desc") {

        filtered.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));

    }
    else if (sort === "name-asc") {

        filtered.sort((a, b) => a.name.localeCompare(b.name));

    }
    else if (sort === "name-desc") {

        filtered.sort((a, b) => b.name.localeCompare(a.name));

    }

    filteredCars = filtered;
    return filtered;
}

function renderAll() {
    const filtered = filterAndSort();
    renderCars(filtered, currentPage);
    renderPagination(filtered.length, currentPage);
    updateWishlistCount();
}

// ---------- INIT CARS ----------
function initCars() {
    // Search & Filters
    document.getElementById('carSearch').addEventListener('input', () => {
        currentPage = 1;
        renderAll();
    });
    document.getElementById('filterPrice').addEventListener('change', () => {
        currentPage = 1;
        renderAll();
    });
    document.getElementById('filterFuel').addEventListener('change', () => {
        currentPage = 1;
        renderAll();
    });
    document.getElementById('filterTrans').addEventListener('change', () => {
        currentPage = 1;
        renderAll();
    });
    document.getElementById('sortCars').addEventListener('change', () => {
        currentPage = 1;
        renderAll();
    });

    // View toggle
    document.querySelectorAll('.view-toggle button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-toggle button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            renderAll();
        });
    });

    renderAll();
}

document.addEventListener('DOMContentLoaded', initCars);