const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Routes
const ticketRoutes = require('./routes/ticketRoutes');
const agentRoutes = require('./routes/agentRoutes');

  (() => {

    app.use('/support-tickets', ticketRoutes());
    app.use('/support-agents', agentRoutes());

    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;