import React, { useState } from "react";
import './ticketCreation.css'
import {useForm} from "react-hook-form";

const TicketCreation = () => {
  const [submit, setSubmit] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
      }, 5000);

      reset();
      console.log(e);
  }

  return (
    <div className="ticketMain">
      <h1 className="header">Create a new Ticket</h1>
      {submit && (
        <div className="popup">
          <p>Ticket Submitted Successfully</p>
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
          <option value="Assigned">Assigned</option>
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
