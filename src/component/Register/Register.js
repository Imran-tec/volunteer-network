import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import {  useHistory, useLocation, useParams } from 'react-router-dom';
import { appContext } from '../../App';



const Register = () => {
const {id} = useParams();

const [loggedInUser, setLoggedInUser] = useContext(appContext)
const [newRegister , setNewRegister] = useState({})


useEffect(() => {

  fetch(`https://warm-stream-41347.herokuapp.com/orderedTasks?title=${id}`)
  .then(res => res.json())
  .then(data => {
    const {title,id,image} = data[0];
    const newUser = {
      title: title,
      id: id,
      image: image
    }
    console.log(data);
    setNewRegister(newUser);
  })
},[])


const history = useHistory();
const location = useLocation();
const { from } =  { from: { pathname: "/orderedTask" } };
   
const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = data => {
  const totalData = {...newRegister, ...data}
  history.replace(from)
  fetch('https://warm-stream-41347.herokuapp.com/addtask',{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(totalData)
})
.then(res => res.json())
.then(data => {
  console.log(data)

  
 
})
 
};


    return (
        <div>

       
        <div className="from_container">

<br/>

<br/>
        
             <form onSubmit={handleSubmit(onSubmit)}  >
             <h4>Register as a Volunteer</h4>
             <br/>
             <br/>
   <label htmlFor="name"> Name </label>
      <input  ref={register}   name="name" defaultValue={loggedInUser.name}  />
  
      <label htmlFor="email">Email</label>
      <input ref={register} name="email" defaultValue={loggedInUser.email}  />

      <label htmlFor="date">date</label>
        <input
           ref={register}
           name="date"
            id="date"
           
            type="date"
            defaultValue="2017-05-24"
          
        />
 
      <label htmlFor="description"> Description</label>
      <input  ref={register} name="description" />
 
      <label htmlFor="task">Organize books at the library</label>
      <input ref={register} name="task" defaultValue={id}  />
<br/>
<br/>
<input className="btn btn-primary" type="submit" value="Registration"/>
     {/* <Link to="OrderedTask"> <input  type="submit" value="Registration"/></Link> */}
      </form>
     
   
        </div>
        </div>
    );
};

export default Register;