const express = require("express");
const path = require('path');
const { initializeData } = require('./API_Utils');
const { Sequelize } = require('sequelize');

const PORT = process.env.PORT || 3001;

const sequelize = new Sequelize('sqlite::memory:');

const app = express();

app.use(express.static(path.resolve(__dirname, '../Client/build')));

// Logic for SQL DB
// Initializing info post-api calls and sanitation. Update if info already exists in db 

// Logic for Base API calls to gather all necessary Raw info + Logic for Sanitation of data

initializeData(sequelize);

// API ROUTES

/** Routes include: 
 *      - /api/congress | returns obj for Redux State
 *      - /api/login | /api/loggout | /api/createUser - handle user creation/Login/Loggout
*/

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/api/congress', async (req, res) => {
    res.json({ message: "This is congress" });
})
// ALL OTHER ROUTES NOT HANDLED RETURN THE REACT CLIENT

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
