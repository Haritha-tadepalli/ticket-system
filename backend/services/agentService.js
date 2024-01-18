const AgentRepository = require('../repositories/agentRepository');

const addAgent = async (agentData) => {
    try {
        // Logic to add an agent
        const addedAgent = await AgentRepository.addAgent(agentData);
        return addedAgent;
    } catch (error) {
        throw new Error(`Failed to add agent: ${error.message}`);
    }
};

module.exports = {
    addAgent
};