const express = require('express');
const { MongoClient } = require('mongodb');

const mongoURI = 'your-mongodb-uri';
// const dbName = 'your-database-name';

const Client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB(){
try {
    await Client.connect();
    console.log('Connected to MongoDB');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

  module.exports = connectToDB;