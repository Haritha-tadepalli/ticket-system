// Function to add Agent

const connectToDB =  require('./dbConnection');
const dbName = 'ticket-system';

const client = await connectToDB();

const db = client.db(dbName);

const addAgent = async (agentData) => {

    const agentCollection = db.collection('Agent');

    try {
        agentData.id = agentCollection.lenght + 1;
        const result = await agentCollection.insertOne(agentData);
        console.log(result);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating agent');
    }
};

const getAgents = async () => {
    
    const agentCollection = db.collection('Agent');

    try{
        const result = await agentCollection.lenght;
        console.log(result);
        return result;
    }
    catch(error){
        throw new Error("Error getting number of agents");
    }

}

module.exports = {
    addAgent,
    getAgents
};
