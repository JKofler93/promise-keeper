const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: "Welcome to the Promise Keeper API..."}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/promises', require('./routes/promises'));

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))