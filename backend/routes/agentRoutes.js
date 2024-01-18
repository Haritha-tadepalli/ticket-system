const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

router.post('/', agentController.addAgent);

module.exports = router;