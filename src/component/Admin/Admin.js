import React, { useEffect, useState } from 'react';
import './Admin.css'
import AdminPanel from '../AdminPanel/AdminPanel';
import logo from '../../resources/logos/Group 1329.png';
import { Link } from 'react-router-dom';


const Admin = () => {
    const [users,setUser] = useState([])
    console.log(users)
       
    useEffect(() => {
        fetch('https://warm-stream-41347.herokuapp.com/admin')
        .then(res => res.json())
        .then(data => setUser(data) )
            },[users]);
         
   const handleDeleteUser = (id) => {
    fetch(`https://warm-stream-41347.herokuapp.com/cancel/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
        console.log('delete success')
    })
   }       
   
   const createEvent = () => {
 fetch('https://warm-stream-41347.herokuapp.com/create')
 
   }


    return (
        <div className="admin_container">
            <div className="left_side">
                <img style={{width:'100px',marginBottom:'5vh'}} src={logo} alt=""/>
                 <p> volunteer Register list </p>
            <Link to="/createEvent"> <button>+ add event</button></Link>
              </div>
            <div className="details_container">
            <h4>Volunteer Register list</h4>
            <div className="row">
           
        <div className="col-sm-2">
           name
        </div>
        <div className="col-sm-4">
           email
        </div>
        <div className="col-sm-2">
             Registration date
        </div>
        <div className="col-sm-2">
          volunteer list
        </div>
         <div className="col-sm-1">
          <h4>Action</h4>
        </div>
       </div>
             
            {users.map(user =>  <AdminPanel handleDeleteUser={handleDeleteUser} singleUser ={user}></AdminPanel>)}

            </div>
            
        </div>
    );
};

export default Admin;