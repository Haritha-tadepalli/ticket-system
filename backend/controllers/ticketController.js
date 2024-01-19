const { query } = require('express');
const TicketService = require('../services/ticketService');

// Add a Ticket
const addTicket = async (req, res) => {
  try {
    const { topic, description, dateCreated, severity, type, assignedTo, status, resolvedOn } = req.body;
    const result = await TicketService.addTicket(id, topic, description, dateCreated, severity, type, assignedTo, status, resolvedOn);
    res.status(201).json({ status: 'success', data: result });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// List all the tickets
const listAllTickets = async (req, res) => {
  console.log("Entered Get Tickets");
  try {

    const query = req.query;

    const tickets = await TicketService.listAllTickets(query);
    res.status(200).json({ status: 'success', data: tickets.data, pages: tickets.total });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  addTicket,
  listAllTickets,
};