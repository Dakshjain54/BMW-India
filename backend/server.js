const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Helper: get all car names
async function getAllCarNames() {
    return new Promise((resolve) => {
        pool.query('SELECT name FROM cars', (err, results) => {
            if (err || !results) resolve([]);
            else resolve(results.map(r => r.name));
        });
    });
}

// Helper: find car in DB from user message
async function findCarInDB(message) {
    return new Promise((resolve) => {
        pool.query('SELECT * FROM cars', (err, allCars) => {
            if (err || allCars.length === 0) {
                resolve(null);
                return;
            }
            const lowerMsg = message.toLowerCase();
            // Try to find a car whose name appears in the message
            const matchedCar = allCars.find(car => 
                lowerMsg.includes(car.name.toLowerCase())
            );
            resolve(matchedCar || null);
        });
    });
}

// API: Get all cars
app.get('/api/cars', (req, res) => {
    pool.query('SELECT * FROM cars', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// API: Get car by ID
app.get('/api/cars/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM cars WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.json(results[0]);
    });
});

// API: Chatbot (Rule-Based, No AI)
app.post('/api/chatbot', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const carMatch = await findCarInDB(userMessage);

        if (carMatch) {
            // If a car is found, return its details
            const reply = `**${carMatch.name}**\n\n💰 Price: ${carMatch.price}\n⚙️ Engine: ${carMatch.engine}\n📝 Description: ${carMatch.description}`;
            res.json({ reply });
        } else {
            // If no car found, list all available models
            const allCarNames = await getAllCarNames();
            const modelsList = allCarNames.join(', ');
            const reply = `I can help with the following BMW models: ${modelsList}. Please ask about one of these.`;
            res.json({ reply });
        }
    } catch (error) {
        console.error('Chatbot error:', error);
        res.json({ reply: "Sorry, an error occurred." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});