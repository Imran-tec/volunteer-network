import React, { useEffect } from 'react';
import './Orderdetail.css'

const OrderedTaskDetail = (props) => {
   const {title,date,image,_id} = props.task;

    return (
     <div>
            <div className="card" style={{width: '10rem',margin:'2rem'}}>
 
            <img className="card-img-top" src={image} alt=""/>
       
        <div className="card-body">
          <h6 className="card-title"> {title} </h6>
          <p className="card-text"> {date} </p>
          <button onClick={() => props.handleCancelBtn(_id)} class="btn btn-primary">cancel</button>
        </div>
      </div>
     </div>
    );
};

export default OrderedTaskDetail;