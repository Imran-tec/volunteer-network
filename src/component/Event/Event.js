import React from 'react';
import { useForm } from "react-hook-form";

const Event = () => {
   
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    fetch('https://warm-stream-41347.herokuapp.com/addevent',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
          if(data){
            alert('your event create successfully')
          }
      })
  };

    return (
        <div >
      



    <form style={{margin:'auto',display:'block'}} onSubmit={handleSubmit(onSubmit)}>
        
        <br/>
        <label htmlFor="title"> Event title </label>
        <br/>
      <input id="title" name="title" ref={register} />
      <br/>
       <label htmlFor="date">Event date </label>
       <br/>
      <input id="date" type="date" name="date"  ref={register} />
      <br/>
      <label htmlFor="description" > Description</label>
      <br/>
      <input id="description" name="description" ref={register} />
      <br/>
      <br/>
      
      <input className="btn btn-primary" type="submit" />
    </form>
  

        </div>
    );
};

export default Event;