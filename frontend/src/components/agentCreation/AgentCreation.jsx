import React, {useState} from "react";
import './agentCreation.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AgentCreation = () => {

  const [submit, setSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = async (formData) => {
    try {
      console.log("Triggering backend");
      const response = await axios.post('http://localhost:3001/support-agents', formData);

      console.log('Server response:', response.data);

      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
        reset();
      }, 5000);
    } catch (error) {
      setErrorMessage(error.body);
      console.log('Error submitting form:', error);
      setTimeout(() => {
        setErrorMessage(null);
        reset();
      }, 5000);
    }
  };


  return (
    <div className="agentMain">
      <h1 className="header">Create a new Agent</h1>
      {submit && (
        <div className="popup">
          <p>Agent Created Successfully</p>
        </div>
      )}
      {errorMessage && (
        <div className="popup">
          <p>{errorMessage}</p>
          Error in Agent Creation
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} >
      <label >
        Name*:
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.name?.message}</span>
      </label>

      <label >
        Email*:
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          onChange={handleChange}
        />
        <span className="error">{errors.email?.message}</span>
      </label>

      <label>
          Phone Number*:
          <input
            type="tel"
            name="phoneNumber"
            {...register('phoneNumber', { 
              required: 'Phone Number is required',
              pattern: {
                value: /^\d{10}$/, // Assuming a 10-digit phone number format
                message: 'Invalid phone number format'
              }
            })}
            onChange={handleChange}
          />
          <span className="error">{errors.phoneNumber?.message}</span>
        </label>

      <label>
        Description*:
        <textarea
          {...register('description', { required: 'Description is required' })}
          onChange={handleChange}
        />
        <span className="error">{errors.description?.message}</span>
      </label>

      <button type="submit">Submit</button>
    </form>
      
    </div>
    )
}

export default AgentCreation;