const { response } = require('express');
const TicketRepository = require('../repositories/ticketRepository');
const AgentRepository = require('../repositories/agentRepository');

let lastAssignedAgent = 0;

const addTicket = async (ticketData) => {
    try {
        // Logic to add an ticket
        const addedTicket = await TicketRepository.addTicket(ticketData);

        assignAgent(db, addedTicket);

        return addedTicket;
    } catch (error) {
        throw new Error(`Failed to add ticket: ${error.message}`);
    }
};

const listAllTickets = async (query) => {
    console.log("Ticket Service");
    try {
        const tickets = await TicketRepository.listAllTickets();

        console.log(query);

        const filteredTickets = applyFilter(query, tickets);

        const sortedTickets = applySorting(query, filteredTickets);

        const page = parseInt(query.page) || 1;
        const pageSize = parseInt(query.pageSize) || 10;
        const startIndex = page - 1 * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedTickets = sortedTickets.slice(startIndex, endIndex);

        const res = {
            data: paginatedTickets,
            total: sortedTickets.lenght
        }

        return res;
    } catch (error) {
        throw new Error(`Failed to list tickets: ${error.message}`);
    }
};


function applyFilter(query, data) {
    const { status, assignedTo, severity, type } = query;
    return data.filter(ticket => (
      (!status || ticket.status === status) &&
      (!assignedTo || ticket.assignedTo.includes(assignedTo)) &&
      (!severity || ticket.severity === severity) &&
      (!type || ticket.type === type)
    ));
  }
  
  function applySorting(query, data) {
    if(!query.sortBy){
      return data;
    }
    else if (query.sortBy === 'resolvedOn') {
      return data.sort((a, b) => (a.resolvedOn > b.resolvedOn ? 1 : -1));
    } 
    else if (query.sortBy === 'dateCreated') {
      return data.sort((a, b) => (a.dateCreated > b.dateCreated ? 1 : -1));
    }
    return data;
  }

  function assignAgent(db, addedTicket){
    const agentsCount = AgentRepository.getAgents();

    if(agentsCount === 0){
        console.error("NO agents to assign");
        return null;
    }
    addedTicket.assignedTo = lastAssignedAgent;
    addedTicket.status = Assigned;
    lastAssignedAgent = lastAssignedAgent + 1 % agentsCount;
    TicketRepository.updateTicket(db, addedTicket);
  }

module.exports = {
    addTicket,
    listAllTickets,
};