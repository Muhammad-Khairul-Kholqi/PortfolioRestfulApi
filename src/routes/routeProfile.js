const express = require('express');
const route = express.Router();
const profileController = require('../controller/conProfile');
const upload = require('../config/multerConfig');

// route semua data
route.get('/', profileController.getAllDataProfile);

// route data per id
route.get('/:id', profileController.getAllDataProfileById);

// route update data
route.patch('/:id', upload.single('image'), profileController.updateDataProfile);

module.exports = route;
