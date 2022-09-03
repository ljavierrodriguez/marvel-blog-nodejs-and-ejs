require('dotenv').config();

const { default: axios } = require('axios');
const { API_SECRET_KEY, API_KEY, API_URL } = require('../config');
const { generateHash } = require("../utils/libs");

const home = async (req, res) => {
    const hash = generateHash(1, API_KEY, API_SECRET_KEY);
    console.log(`${API_URL}/characters?ts=1&apikey=${API_KEY}&hash=${hash}`);
    const {data} = await axios.get(`${API_URL}/comics?ts=1&apikey=${API_KEY}&hash=${hash}`);
    console.log(data);
    res.render('index', { comics: data });
}

module.exports = {
    home
}

