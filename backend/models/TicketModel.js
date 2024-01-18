const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  severity: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  resolvedOn: {
    type: Date,
  },
});

const ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;