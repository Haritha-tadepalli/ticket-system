import React, {useState} from "react";
import './agentCreation.css'
import { useForm } from "react-hook-form";

const AgentCreation = () => {

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

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   description: "",
  // });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   try{
  //       const response = fetch('http:',{
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(formData),
  //         });
  //         if (response.ok) {
  //           

  //           setFormData({
  //             name: "",
  //             email: "",
  //             phone: "",
  //             description: "",
  //           });

  //           
    
  //           console.log("Form data submitted successfully");
  //         } else {
  //           console.error('Failed to submit form data:', response.statusText);
  //         }
  //       } catch (error) {
  //         console.error('Error submitting form data:', error.message);
  //       }
  // };

  return (
    <div className="agentMain">
      <h1 className="header">Create a new Agent</h1>
      {submit && (
        <div className="popup">
          <p>Agent Created Successfully</p>
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