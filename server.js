const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Path to the static files directory
const publicDir = path.join(__dirname, 'public');

// Serve static files from the "public" directory
app.use(express.static(publicDir));

// Explicit root route to index.html (optional but clear)
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
