const TicketRepository = require('../repositories/ticketRepository');

const addTicket = async (ticketData) => {
    try {
        // Logic to add an ticket
        const addedTicket = await TicketRepository.addTicket(ticketData);
        return addedTicket;
    } catch (error) {
        throw new Error(`Failed to add ticket: ${error.message}`);
    }
};

const listAllTickets = async () => {
    try {
        const tickets = await TicketRepository.listAllTickets();
        return tickets;
    } catch (error) {
        throw new Error(`Failed to list authors: ${error.message}`);
    }
};

module.exports = {
    addTicket,
    listAllTickets,
};