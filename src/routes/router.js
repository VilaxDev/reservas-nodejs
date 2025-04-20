const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/reservas/create', controller.create);
router.get('/reservas', controller.getAll);

module.exports = router;
