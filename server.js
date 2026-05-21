const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies from the client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from your 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic Login API Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // For demonstration: Hardcoded credentials (use a database in production)
    if (username === 'admin' && password === 'admin123') {
        res.json({ success: true, redirect: '/dashboard.html' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Default route directs users to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running! Visit http://localhost:${PORT} in your browser.`);
});