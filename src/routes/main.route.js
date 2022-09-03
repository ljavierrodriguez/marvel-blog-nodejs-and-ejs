const express = require('express');
const { home } = require('../controllers/main.controllers');
const mainRouter = express.Router();

mainRouter.get('/', home);

module.exports = {
    mainRouter
}