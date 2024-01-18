const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/', ticketController.addTicket);
router.get('/', ticketController.listAllTickets);

module.exports = router;