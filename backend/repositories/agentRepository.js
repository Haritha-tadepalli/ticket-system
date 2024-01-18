// Function to add Agent
const addAgent = async (db, agentData) => {
    const agentCollection = db.collection('agents');
    try {
        const result = await agentCollection.insertOne(agentData);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating agent');
    }
};

module.exports = {
    addAgent,
};
