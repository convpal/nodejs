// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.get('/resources', resourceController.getItems);
router.post('/resource/create', resourceController.postItem);
router.get('/resource/:itemId', resourceController.getItem);
router.put('/resource/:itemId', resourceController.updateItem);
router.delete('/resource/:itemId', resourceController.deleteItem);

module.exports = router;