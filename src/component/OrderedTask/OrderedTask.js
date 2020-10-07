import React, { useContext, useEffect, useState } from 'react';
import { appContext } from '../../App';
import Header from '../Header/Header';
import OrderedTaskDetail from '../OrderedTaskDetail/OrderedTaskDetail';

const OrderedTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(appContext);

    const [order,setOrder] = useState([]);

   useEffect(() => {
    fetch(`https://warm-stream-41347.herokuapp.com/userOrder?email=${loggedInUser.email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setOrder(data)
    })
   },[order]);



   const handleCancelBtn = (id) =>{
console.log(id)
fetch(`https://warm-stream-41347.herokuapp.com/cancel/${id}`,{
    method: 'DELETE'
})
.then(res => res.json())
.then(result => {
    console.log('delete success')
})
   }
   
    return (
        <div>
         
           
         <div style ={{display:'flex',flexWrap:'wrap',margin:'3rem'}}>
         {
                order.map(task => <OrderedTaskDetail handleCancelBtn={handleCancelBtn} task={task}>

                </OrderedTaskDetail>)
            }
         </div>
        </div>
    );
};

export default OrderedTask;