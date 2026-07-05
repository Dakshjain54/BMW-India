// ============================================================
// main.js — Home page logic
// ============================================================

// ---------- RENDER FEATURED ----------
function renderFeatured() {
    const container = document.getElementById('featuredGrid');
    if (!container) return;
    const featured = carData.slice(0, 3);
    container.innerHTML = featured.map(c => buildCarCard(c)).join('');
    attachCardEvents(container);
}

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
            renderFeatured();
            updateWishlistCount();
        });
    });

    container.querySelectorAll('[data-action="compare"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleCompare(id);
            renderFeatured();
        });
    });
}

// ---------- TESTIMONIALS ----------
function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    let currentIdx = 0;

    function render() {
        const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        const total = testimonials.length;
        const maxIdx = Math.max(0, total - visible);
        if (currentIdx > maxIdx) currentIdx = maxIdx;
        const items = testimonials.slice(currentIdx, currentIdx + visible);
        while (items.length < visible) items.push(testimonials[currentIdx % total]);
        track.innerHTML = items.map(t => `
            <div class="testimonial-item">
                <div class="stars">★★★★★</div>
                <blockquote>“${t.quote}”</blockquote>
                <div class="author">${t.name} <span>· ${t.role}</span></div>
            </div>
        `).join('');
        track.style.transform = 'translateX(0)';
    }

    document.getElementById('testPrev').addEventListener('click', () => {
        const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        currentIdx = Math.max(0, currentIdx - visible);
        render();
    });
    document.getElementById('testNext').addEventListener('click', () => {
        const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        currentIdx = Math.min(testimonials.length - visible, currentIdx + visible);
        render();
    });
    render();
    window.addEventListener('resize', render);
}

// ---------- COUNTERS ----------
function animateCounters() {
    document.querySelectorAll('.counter').forEach(el => {
        const target = parseInt(el.dataset.target);
        if (!target || el.dataset.animated) return;
        el.dataset.animated = 'true';
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target + (target === 98 ? '%' : '+');
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// ---------- INIT ----------
function initHome() {
    renderFeatured();
    renderTestimonials();
    animateCounters();
    updateWishlistCount();

    // Newsletter
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const email = input.value.trim();
        if (email && email.includes('@')) {
            showToast('Subscribed successfully! 🎉', 'success');
            input.value = '';
        } else {
            showToast('Please enter a valid email address.', 'error');
        }
    });

    // Counter observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) animateCounters();
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(el => observer.observe(el));
}
// ================================
// LOADER
// ================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
});
// Run on page load
document.addEventListener('DOMContentLoaded', initHome);