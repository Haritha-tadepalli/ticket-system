const AgentService = require('../services/agentService');

// Add an Agent
const addAgent = async (req, res) => {
  try {
    const { name, email, phoneNumber, description } = req.body;
    const result = await AgentService.addAgent(name, email, phoneNumber, description);
    res.status(201).json({ status: 'success', data: result });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

module.exports = {
    addAgent,
};