// Function to add Ticket
const addTicket = async (db, ticketData) => {
    const ticketCollection = db.collection('tickets');
    try {
        const result = await ticketCollection.insertOne(ticketData);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating ticket');
    }
};

// Function to retrieve all Ticket
const listAllTickets = async (db) => {
    const ticketCollection = db.collection('ticekts');
    try {
        const tickets = await ticketCollection.find({}).toArray();
        return tickets;
    } catch (error) {
        throw new Error('Error fetching tickets');
    }
};

module.exports = {
    addTicket,
    listAllTickets,
};
