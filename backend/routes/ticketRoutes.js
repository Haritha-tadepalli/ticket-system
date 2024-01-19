const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

console.log("Entered Ticket Routes");

router.post('/', ticketController.addTicket);
router.get('/', ticketController.listAllTickets);

module.exports = router;