import React from 'react';
import { Link } from 'react-router-dom';
import './task.css';

const Task = ({task}) => {
    const {title,image,id} = task;

    
    return (
        <div>
            
        <div className="task_container ">
<Link to={`/register/${title}`}>   
<img style={{width:'70%',margin:'20px 20px 0 20px'}} src={image} alt=""/>

 </Link>
            <h5> {title} </h5>
        </div>

        </div>
    );
};

export default Task;