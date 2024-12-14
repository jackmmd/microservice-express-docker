const express = require('express');
const pool = require('./db')
const { PORT  } = require('./constants')
const app = express();

app.get('/users', async(req, res) => {
    const response = await pool.query("SELECT * FROM users;")
    res.json(response[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  