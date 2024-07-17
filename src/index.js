const express = require('express');
require('dotenv').config();
const cors = require('cors');
const middlewareLogRequest = require('./middleware/logs');
const profileRoute = require('./routes/routeProfile');

const PORT = process.env.PORT;
const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use(cors());

app.use('/public/uploads', express.static('public/uploads'));

app.use('/profile', profileRoute);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
