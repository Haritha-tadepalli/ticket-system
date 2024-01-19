
const connectToDB =  require('./dbConnection');
const dbName = 'ticket-system';

const client = await connectToDB();

const db = client.db(dbName);

// Function to add Ticket
const addTicket = async (db, ticketData) => {
    const ticketCollection = db.collection('Ticket');
    try {
        ticketData.id = ticketCollection.length + 1;
        const result = await ticketCollection.insertOne(ticketData);
        console.log(result);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating ticket');
    }
};

// Function to retrieve all Ticket
const listAllTickets = async (db) => {
    const ticketCollection = db.collection('Ticket');
    try {
        const tickets = await ticketCollection.find({}).toArray();
        return tickets;
    } catch (error) {
        throw new Error('Error fetching tickets');
    }
};

const updateTicket = async (db, updatedTicket) => {
    const ticketCollection = db.collection("Ticket");
    try{
        const updatedDetails = {assingedTo : updatedTicket.assingedTo, status: updatedTicket.status};
        const result = await ticketCollection.updateOne({_id: updatedTicket.id}, {$set : updatedDetails});

    }
    catch(error) {
        throw new Error('Error while updating ticket');
    }
}

module.exports = {
    addTicket,
    listAllTickets,
    updateTicket
};
