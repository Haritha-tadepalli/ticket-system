// Function to add Agent

const dbConnection =  require('./dbConnection');
const dbName = 'ticket-system';

const addAgent = async (agentData) => {

    const client =  await dbConnection.connectToDB();

    const db = client.db(dbName);

    const agentCollection = db.collection('Agent');

    try {
        agentData.id = agentCollection.lenght + 1;
        const result = await agentCollection.insertOne(agentData);
        console.log(result);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating agent');
    }
    finally {
        if (client) {
          await dbConnection.closeConnection();
        }
    }
};

const getAgents = async () => {

    const client =  await dbConnection.connectToDB();

    const db = client.db(dbName);
    
    const agentCollection = db.collection('Agent');

    try{
        const result = await agentCollection.lenght;
        console.log(result);
        return result;
    }
    catch(error){
        throw new Error("Error getting number of agents");
    }
    finally {
        if (client) {
          await dbConnection.closeConnection();
        }
    }
}

module.exports = {
    addAgent,
    getAgents
};
