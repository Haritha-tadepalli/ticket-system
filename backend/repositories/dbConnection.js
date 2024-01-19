const express = require('express');
const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb://localhost:27017';
// const dbName = 'your-database-name';

const Client = new MongoClient(mongoURI);

async function connectToDB(){
try {
    await Client.connect();
    console.log('Connected to MongoDB');
    return Client;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function closeConnection() {
    await Client.close();
    console.log('MongoDB connection closed');
  }
  
  module.exports = { connectToDB, closeConnection };