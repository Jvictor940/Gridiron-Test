const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' })

const app = express();

// parse application/json
app.use(bodyParser.json())

// Reads from our config.env file || fallback if it can't read our file 
const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})