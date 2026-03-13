// Global Variables
let cars = [];

// Fetch all cars from API
async function fetchCars() {
    try {
        const response = await fetch('/api/cars');
        cars = await response.json();
        // Fix price symbol if needed (replace ? with ₹)
        cars = cars.map(car => ({
            ...car,
            price: car.price.replace('?', '₹')
        }));
        return cars;
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
}

// Helper to create a car card element with smart series detection
function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    
    // Extract short name (remove 'BMW ' prefix)
    let shortName = car.name.replace('BMW ', '');
    
    // ----- Series Detection -----
    let series = null;
    let upperShort = shortName.toUpperCase();
    
    // Check for M models:
    // - Ends with " M" (like "X5 M", "X6 M")
    // - Starts with M followed by number (like "M3", "M135i")
    // - Exactly "XM"
    if (/\sM$/.test(shortName) || /^M\d/.test(shortName) || shortName === 'XM') {
        series = 'm';
    }
    // Check for X models: starts with X followed by number (like "X1", "X5")
    else if (/^X\d/.test(shortName)) {
        series = 'x';
    }
    // Check for i models: starts with i followed by number or "iX"
    else if (/^i\d|^iX\b/i.test(shortName)) {
        series = 'i';
    }
    
    if (series) {
        card.setAttribute('data-series', series);
    }
    
    // Extract series name for subtitle (first word)
    let seriesName = shortName.split(' ')[0];
    
    card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <div class="card-content">
            <h3>${shortName}</h3>
            <div class="car-subtitle">${seriesName} Series</div>
            <div class="price-tag">
                <i class="fas fa-rupee-sign"></i> ${car.price}
            </div>
            <div class="engine-info">
                <i class="fas fa-microchip"></i>
                <span>${car.engine}</span>
            </div>
            <a href="details.html?id=${car.id}" class="btn-details">
                View Details <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    return card;
}

// Display cars in a grid (used for cars page)
function displayCars(containerId, carArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    carArray.forEach(car => {
        const card = createCarCard(car);
        container.appendChild(card);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();
        const filtered = cars.filter(car => car.name.toLowerCase().includes(term));
        displayCars('car-grid', filtered);
    });
}

// ==================== DETAILS PAGE ====================

async function loadCarDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (!id) return;

    try {
        const response = await fetch(`/api/cars/${id}`);
        const car = await response.json();
        car.price = car.price.replace('?', '₹');

        // Set hero image
        const mainImg = document.getElementById('main-car-image');
        if (mainImg) {
            mainImg.src = car.image;
            mainImg.alt = car.name;
        }

        // Set title
        document.getElementById('car-name-title').textContent = car.name;

        // Set description
        document.getElementById('car-description').textContent = car.description;

        // Extract specs using updated functions (pass both name and engine)
        const power = extractPower(car.engine);
        const fuelType = extractFuelType(car.engine);
        const acceleration = extractAcceleration(car.name, car.engine);
        const topSpeed = extractTopSpeed(car.name, car.engine);
        const transmission = extractTransmission(car.name, car.engine);
        const drivetrain = extractDrivetrain(car.name, car.engine);
        const torque = extractTorque(car.engine);
        const mileage = extractMileage(car.name, car.engine);

        const specsGrid = document.getElementById('specs-grid');
        specsGrid.innerHTML = `
            <div class="spec-item">
                <span class="spec-label">Price</span>
                <span class="spec-value">${car.price}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Engine</span>
                <span class="spec-value">${car.engine}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Power</span>
                <span class="spec-value">${power}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Torque</span>
                <span class="spec-value">${torque}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">0-100 km/h</span>
                <span class="spec-value">${acceleration}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Top Speed</span>
                <span class="spec-value">${topSpeed}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Fuel Type</span>
                <span class="spec-value">${fuelType}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Transmission</span>
                <span class="spec-value">${transmission}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Drivetrain</span>
                <span class="spec-value">${drivetrain}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Mileage</span>
                <span class="spec-value">${mileage}</span>
            </div>
        `;

        // Features list
        const features = generateFeatures(car.name, car.engine);
        const featuresList = document.getElementById('features-list');
        featuresList.innerHTML = features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');

    } catch (error) {
        console.error('Error loading car details:', error);
    }
}

// Helper functions for extracting specs

function extractPower(engineStr) {
    const match = engineStr.match(/(\d+)\s*hp/i);
    return match ? match[1] + ' hp' : 'N/A';
}

function extractTorque(engineStr) {
    if (engineStr.includes('3.0L') && engineStr.includes('6-cylinder')) return '500 Nm';
    if (engineStr.includes('2.0L') && engineStr.includes('4-cylinder')) return '350 Nm';
    if (engineStr.includes('4.4L') && engineStr.includes('V8')) return '750 Nm';
    if (engineStr.includes('Electric')) return '600 Nm';
    if (engineStr.includes('diesel')) return '400 Nm';
    if (engineStr.includes('1.5L')) return '220 Nm';
    return '400 Nm';
}

function extractFuelType(engineStr) {
    const eng = engineStr.toLowerCase();
    if (eng.includes('electric')) return 'Electric';
    if (eng.includes('diesel')) return 'Diesel';
    if (eng.includes('hybrid')) return 'Hybrid';
    return 'Petrol';
}

function extractAcceleration(modelName, engineStr) {
    // First check if it's an electric model (based on engine)
    if (engineStr.toLowerCase().includes('electric')) {
        if (modelName.includes('i4')) return '3.9 sec';
        if (modelName.includes('iX')) return '4.2 sec';
        if (modelName.includes('i7')) return '4.5 sec';
        return '4.5 sec';
    }
    
    // Then check M models
    if (modelName.includes('M8')) return '3.2 sec';
    if (modelName.includes('M5')) return '3.4 sec';
    if (modelName.includes('M4')) return '3.8 sec';
    if (modelName.includes('M3')) return '3.9 sec';
    if (modelName.includes('M2')) return '4.1 sec';
    if (modelName.includes('X5 M') || modelName.includes('X6 M')) return '3.9 sec';
    if (modelName.includes('XM')) return '4.1 sec';
    
    // X models
    if (modelName.includes('X1')) return '6.8 sec';
    if (modelName.includes('X3')) return '6.2 sec';
    if (modelName.includes('X5')) return '5.1 sec';
    if (modelName.includes('X7')) return '5.8 sec';
    
    // Series models
    if (modelName.includes('3')) return '5.8 sec';
    if (modelName.includes('5')) return '5.2 sec';
    if (modelName.includes('7')) return '4.5 sec';
    
    // Default
    return '6.0 sec';
}

function extractTopSpeed(modelName, engineStr) {
    if (engineStr.toLowerCase().includes('electric')) return '220 km/h';
    if (modelName.includes('M')) return '290 km/h';
    if (modelName.includes('X5') || modelName.includes('X6')) return '250 km/h';
    if (modelName.includes('X3')) return '240 km/h';
    if (modelName.includes('X1')) return '230 km/h';
    return '250 km/h';
}

function extractTransmission(modelName, engineStr) {
    if (engineStr.toLowerCase().includes('electric')) return 'Single-Speed Automatic';
    if (modelName.includes('M')) return '8-Speed M Steptronic';
    if (modelName.includes('xDrive')) return '8-Speed Steptronic Sport';
    return '8-Speed Steptronic';
}

function extractDrivetrain(modelName, engineStr) {
    if (engineStr.toLowerCase().includes('electric')) return 'Electric AWD';
    if (modelName.includes('xDrive') || modelName.includes('X')) return 'All-Wheel Drive (xDrive)';
    if (modelName.includes('M') && !modelName.includes('X')) return 'Rear-Wheel Drive (with M diff)';
    return 'Rear-Wheel Drive';
}

function extractMileage(modelName, engineStr) {
    const fuel = extractFuelType(engineStr);
    
    if (fuel === 'Electric') return '450 km/charge';
    if (fuel === 'Diesel') return '18 km/l';
    if (fuel === 'Hybrid') return '15 km/l';
    
    // Petrol models
    if (modelName.includes('M')) return '8 km/l';
    if (modelName.includes('X5') || modelName.includes('X6')) return '10 km/l';
    if (modelName.includes('X3')) return '12 km/l';
    if (modelName.includes('X1')) return '14 km/l';
    if (modelName.includes('3')) return '14 km/l';
    if (modelName.includes('5')) return '13 km/l';
    if (modelName.includes('7')) return '11 km/l';
    return '12 km/l';
}

function generateFeatures(modelName, engineStr) {
    const baseFeatures = [
        'Adaptive LED Headlights',
        'Panoramic Sunroof',
        'Wireless Charging',
        'Harman Kardon Surround Sound',
        'Ambient Lighting',
        'Parking Assistant Plus'
    ];
    
    const fuel = extractFuelType(engineStr);
    
    if (fuel === 'Electric') {
        return [
            'BMW IconicSounds Electric',
            'Adaptive Regeneration',
            'Charging Station Finder',
            'BMW Curved Display',
            'Panoramic Glass Roof',
            ...baseFeatures.slice(0,3)
        ];
    }
    if (modelName.includes('M')) {
        return [
            'M Sport Brakes',
            'M Adaptive Suspension',
            'M Sport Exhaust',
            'M Steering Wheel',
            'M Seat Belts',
            ...baseFeatures.slice(0,4)
        ];
    }
    if (modelName.includes('X')) {
        return [
            'xDrive Intelligent AWD',
            'Dynamic Damper Control',
            'Off-Road Mode',
            'Trailer Assistant',
            ...baseFeatures
        ];
    }
    return baseFeatures;
}

// ==================== COMPARE PAGE ====================

function setupComparePage() {
    const car1Select = document.getElementById('car1');
    const car2Select = document.getElementById('car2');
    const compareBtn = document.getElementById('compare-now-btn');
    const resultDiv = document.getElementById('compare-result');

    // Populate dropdowns
    cars.forEach(car => {
        const option1 = new Option(car.name, car.id);
        const option2 = new Option(car.name, car.id);
        car1Select.add(option1);
        car2Select.add(option2.cloneNode(true));
    });

    compareBtn.addEventListener('click', () => {
        const id1 = parseInt(car1Select.value);
        const id2 = parseInt(car2Select.value);
        
        if (!id1 || !id2) {
            alert('Please select both cars to compare.');
            return;
        }
        
        if (id1 === id2) {
            alert('Please select two different cars.');
            return;
        }
        
        const car1 = cars.find(c => c.id === id1);
        const car2 = cars.find(c => c.id === id2);
        
        displayComparison(car1, car2);
    });

    function displayComparison(car1, car2) {
        resultDiv.classList.remove('hidden');
        
        // Extract power from engine string
        const car1Power = extractPower(car1.engine);
        const car2Power = extractPower(car2.engine);
        
        // Car 1 Details
        document.getElementById('car1-img').src = car1.image;
        document.getElementById('car1-name').textContent = car1.name;
        document.getElementById('car1-price').textContent = car1.price;
        document.getElementById('car1-engine').textContent = car1.engine;
        document.getElementById('car1-power').textContent = car1Power || 'N/A';
        document.getElementById('car1-accel').textContent = extractAcceleration(car1.name, car1.engine) || 'N/A';
        document.getElementById('car1-fuel').textContent = extractFuelType(car1.engine) || 'N/A';
        
        // Car 2 Details
        document.getElementById('car2-img').src = car2.image;
        document.getElementById('car2-name').textContent = car2.name;
        document.getElementById('car2-price').textContent = car2.price;
        document.getElementById('car2-engine').textContent = car2.engine;
        document.getElementById('car2-power').textContent = car2Power || 'N/A';
        document.getElementById('car2-accel').textContent = extractAcceleration(car2.name, car2.engine) || 'N/A';
        document.getElementById('car2-fuel').textContent = extractFuelType(car2.engine) || 'N/A';
        
        // Recommendation (performance only)
        const recommendation = getPerformanceRecommendation(car1, car2);
        document.getElementById('recommendation-text').textContent = recommendation;
    }
    
    // Recommendation function based purely on performance
    function getPerformanceRecommendation(car1, car2) {
        const power1 = parseInt(extractPower(car1.engine) || '0');
        const power2 = parseInt(extractPower(car2.engine) || '0');
        
        const accel1 = extractAcceleration(car1.name, car1.engine);
        const accel2 = extractAcceleration(car2.name, car2.engine);
        
        function accelToNumber(accelStr) {
            if (!accelStr) return 99;
            const match = accelStr.match(/(\d+\.?\d*)/);
            return match ? parseFloat(match[1]) : 99;
        }
        
        const accelNum1 = accelToNumber(accel1);
        const accelNum2 = accelToNumber(accel2);
        
        const isM1 = car1.name.includes('M') && !car1.name.includes('X');
        const isM2 = car2.name.includes('M') && !car2.name.includes('X');
        
        if (isM1 && !isM2) {
            return `The ${car1.name} is a dedicated M performance model, delivering superior driving dynamics and track capability. If you prioritize sheer performance, this is the clear choice.`;
        }
        else if (isM2 && !isM1) {
            return `The ${car2.name} is engineered by BMW M for maximum performance. It offers sharper handling and more power, making it ideal for enthusiasts.`;
        }
        else if (isM1 && isM2) {
            if (power1 > power2) {
                return `Both are exceptional M cars, but the ${car1.name} delivers higher output (${power1} hp) – perfect for those who want the ultimate in power.`;
            } else if (power2 > power1) {
                return `Between these two M models, the ${car2.name} packs more punch (${power2} hp) for adrenaline seekers.`;
            } else {
                if (accelNum1 < accelNum2) {
                    return `Both have similar power, but the ${car1.name} sprints from 0-100 km/h quicker (${accel1}) – a slight edge in acceleration.`;
                } else if (accelNum2 < accelNum1) {
                    return `With nearly identical power, the ${car2.name} takes the lead in acceleration (${accel2}), offering a more thrilling launch.`;
                } else {
                    return `These two M cars are performance twins – your choice comes down to body style or personal preference. Both deliver exhilarating drives.`;
                }
            }
        }
        else {
            if (power1 > power2 && accelNum1 < accelNum2) {
                return `The ${car1.name} wins on both power (${power1} hp) and acceleration (${accel1}), making it the more dynamic performer.`;
            } else if (power2 > power1 && accelNum2 < accelNum1) {
                return `The ${car2.name} outperforms in both power (${power2} hp) and acceleration (${accel2}) – a clear performance pick.`;
            } else if (power1 > power2) {
                return `Although the ${car1.name} has more power (${power1} hp), acceleration is similar. For straight-line thrill, choose the ${car1.name}.`;
            } else if (power2 > power1) {
                return `The ${car2.name} offers superior horsepower (${power2} hp). If you crave stronger acceleration, this is your ride.`;
            } else if (accelNum1 < accelNum2) {
                return `While power is comparable, the ${car1.name} is quicker off the line (${accel1}) – ideal for responsive city driving.`;
            } else if (accelNum2 < accelNum1) {
                return `The ${car2.name} edges ahead in acceleration (${accel2}), providing a more spirited drive.`;
            } else {
                return `Both cars deliver very similar performance. We recommend a test drive to feel which one connects with your driving style.`;
            }
        }
    }
}

// ==================== CHATBOT ====================

function setupChatbot() {
    const chatIcon = document.getElementById('chat-icon');
    const chatBox = document.getElementById('chat-box');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const messagesDiv = document.getElementById('chat-messages');

    if (!chatIcon) return;

    chatIcon.addEventListener('click', () => {
        chatBox.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatBox.classList.remove('active');
    });

    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        messagesDiv.innerHTML += `<div class="user-message">${message}</div>`;
        chatInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        messagesDiv.appendChild(typingDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });
            const data = await response.json();

            messagesDiv.removeChild(typingDiv);
            messagesDiv.innerHTML += `<div class="bot-message">${data.reply}</div>`;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        } catch (error) {
            messagesDiv.removeChild(typingDiv);
            messagesDiv.innerHTML += `<div class="bot-message">Sorry, an error occurred.</div>`;
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// ==================== UI HELPERS ====================

function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', async () => {
    await fetchCars();

    setActiveNavLink();

    // Homepage: Auto-changing cars (every 5 seconds)
    if (document.getElementById('car-grid-home')) {
        const container = document.getElementById('car-grid-home');
        function updateHomepageCars() {
            if (cars.length >= 2) {
                const shuffled = [...cars].sort(() => 0.5 - Math.random());
                const car1 = shuffled[0];
                const car2 = shuffled[1];
                container.innerHTML = '';
                container.appendChild(createCarCard(car1));
                container.appendChild(createCarCard(car2));
            }
        }
        updateHomepageCars();
        setInterval(updateHomepageCars, 5000);
    }

    // Cars page grid
    if (document.getElementById('car-grid')) {
        displayCars('car-grid', cars);
        setupSearch();
    }

    // Details page
    if (document.getElementById('main-car-image')) {
        loadCarDetails();
    }

    // Compare page
    if (document.getElementById('car1') && document.getElementById('car2')) {
        setupComparePage();
    }

    setupChatbot();
    setupMobileMenu();
    setupNavbarScroll();
});