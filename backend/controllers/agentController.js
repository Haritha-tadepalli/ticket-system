const AgentService = require('../services/agentService');

// Add an Agent
const addAgent = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phoneNumber, description } = req.body;
    const result = await AgentService.addAgent(id, name, email, phoneNumber, description);
    res.status(201).json({ status: 'success', data: result });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = {
    addAgent,
};