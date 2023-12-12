const express = require('express');
const path = require('path');
require("dotenv").config();

const app = express();

// Устанавливаем путь к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Static on port: ${PORT}`);
});