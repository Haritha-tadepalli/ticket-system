const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// Routes
const ticketRoutes = require('./routes/ticketRoutes');
const agentRoutes = require('./routes/agentRoutes');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then((client) => {
    console.log('Connected to MongoDB');
    const db = client.db('ticket_system');

    // Pass the db object to the repositories
    const tickets = ticketRepository(db);

    app.use('/support-tickets', ticketRoutes(tickets));
    app.use('/support-agents', agentRoutes(db));

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;