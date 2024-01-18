const TicketService = require('../services/ticketService');

// Add a Ticket
const addTicket = async (req, res) => {
  try {
    const { topic, description, dateCreated, severity, type, assignedTo, status, resolvedOn } = req.body;
    const result = await TicketService.addTicket(topic, description, dateCreated, severity, type, assignedTo, status, resolvedOn);
    res.status(201).json({ status: 'success', data: result });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// List all the authors
const listAllTickets = async (req, res) => {
  try {
    const tickets = await TicketService.listAllTickets();
    res.status(200).json({ status: 'success', data: tickets });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  addTicket,
  listAllTickets,
};