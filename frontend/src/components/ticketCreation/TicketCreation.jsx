import React, { useState } from "react";
import './ticketCreation.css'
import {useForm} from "react-hook-form";
import axios from 'axios';

const TicketCreation = () => {
  const [submit, setSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/support-tickets', formData);

      console.log('Server response:', response.data);

      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
        reset();
      }, 5000);
    } catch (error) {
      setErrorMessage(error.body);
      console.error('Error submitting form:', error);
      setTimeout(() => {
        setErrorMessage(null);
        reset();
      }, 5000);
    }
  };

  return (
    <div className="ticketMain">
      <h1 className="header">Create a new Ticket</h1>
      {submit && (
        <div className="popup">
          <p>Ticket Submitted Successfully</p>
        </div>
      )}
      {errorMessage && (
        <div className="popup">
          <p>{errorMessage}</p>
          Error in ticket Creation
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} >
      <label>
        Topic*:
        <input
          type="text"
          name="topic"
          {...register('topic', { required: 'Topic is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.topic?.message}</span>
      </label>

      <label>
        Description*:
        <textarea
          name="description"
          {...register('description', { required: 'Description is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.description?.message}</span>
      </label>

      <label >
        Date Created*:
        <input
          type="date"
          name="dateCreated"
          {...register('dateCreated', { required: 'Date Created is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.dateCreated?.message}</span>
      </label>

      <label >
        Severity*:
        <input
          type="text"
          name="severity"
          {...register('severity', { required: 'Severity is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.severity?.message}</span>
      </label>

      <label >
        Type*:
        <input
          type="text"
          name="type"
          {...register('type', { required: 'Type is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.type?.message}</span>
      </label>

      <label >
        Status:
        <select name="status" {...register('status', { required: 'Status is required' })} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Resolved">Resolved</option>
        </select>
        <span className="error">{errors.status?.message}</span>
      </label>

      {register('status') === 'Resolved' && (
        <label>
          Resolved On:
          <input
            type="date"
            name="resolvedOn"
            {...register('resolvedOn', { required: 'Resolved On is required' })}
            onChange={handleChange}
          />
          <span className="error">{errors.resolvedOn?.message}</span>
        </label>
      )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketCreation;
