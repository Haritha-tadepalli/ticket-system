const AgentRepository = require('../repositories/agentRepository');

const addAgent = async (agentData) => {
    try {
        // Logic to add an author
        const addedAgent = await AgentRepository.addAgent(agentData);
        return addedAgent;
    } catch (error) {
        throw new Error(`Failed to add author: ${error.message}`);
    }
};

module.exports = {
    addAgent
};