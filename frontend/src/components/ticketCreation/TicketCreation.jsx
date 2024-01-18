import React, { useState } from "react";
import './ticketCreation.css'

const TicketCreation = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    dateCreated: "",
    severity: "",
    type: "",
    assignedTo: "",
    status: "New", // Default value
    resolvedOn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="ticketMain">
      <h1>Create a new Ticket</h1>
      <form onSubmit={handleSubmit} className="ticketForm">
        <label className="ticketLable">
          Topic:
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          />
        </label>

        <label className="ticketLable">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label className="ticketLable">
          Date Created:
          <input
            type="date"
            name="dateCreated"
            value={formData.dateCreated}
            onChange={handleChange}
          />
        </label>

        <label className="ticketLable">
          Severity:
          <input
            type="text"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
          />
        </label>

        <label className="ticketLable">
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>

        <label className="ticketLable">
          Assigned To:
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
          />
        </label>

        <label className="ticketLable">
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="New">New</option>
            <option value="Assigned">Assigned</option>
            <option value="Resolved">Resolved</option>
          </select>
        </label>

        {formData.status === "Resolved" && (
          <label className="ticketLable">
            Resolved On:
            <input
              type="date"
              name="resolvedOn"
              value={formData.resolvedOn}
              onChange={handleChange}
            />
          </label>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketCreation;
