
const dbConnection =  require('./dbConnection');
const dbName = 'ticket-system';


// Function to add Ticket
const addTicket = async (ticketData) => {

    const client =  await dbConnection.connectToDB();

    const db = client.db(dbName);

    const ticketCollection = db.collection('Ticket');
    try {
        ticketData.id = ticketCollection.length + 1;
        const result = await ticketCollection.insertOne(ticketData);
        console.log(result);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating ticket');
    }
    finally {
        if (client) {
          await dbConnection.closeConnection();
        }
    }
};

// Function to retrieve all Ticket
const listAllTickets = async () => {
    console.log("Tiket Repository");
    const client = await dbConnection.connectToDB();

    const db = client.db(dbName);
    const ticketCollection = db.collection('Ticket');
    try {
        const tickets = await ticketCollection.find({}).toArray();
        return tickets;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching tickets');
    }
    finally {
        if (client) {
          await dbConnection.closeConnection();
        }
    }
};

const updateTicket = async (updatedTicket) => {
    const client =  await dbConnection.connectToDB();

    const db = client.db(dbName);
    const ticketCollection = db.collection("Ticket");
    try{
        const updatedDetails = {assingedTo : updatedTicket.assingedTo, status: updatedTicket.status};
        const result = await ticketCollection.updateOne({_id: updatedTicket.id}, {$set : updatedDetails});

    }
    catch(error) {
        throw new Error('Error while updating ticket');
    }
    finally {
        if (client) {
          await dbConnection.closeConnection();
        }
    }
}

module.exports = {
    addTicket,
    listAllTickets,
    updateTicket
};
