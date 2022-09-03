require('dotenv').config();

API_KEY = process.env.API_KEY;
API_SECRET_KEY=process.env.API_SECRET_KEY;
API_URL=process.env.API_URL;

module.exports = {
    API_KEY,
    API_SECRET_KEY,
    API_URL
}