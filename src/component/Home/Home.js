import React, { useEffect, useState } from 'react';
import './Home.css';
import Task from '../Task/Task';



const Home = () => {
  
    
    const [allTasks, setAllTasks] = useState([])
useEffect(() => {
fetch('https://warm-stream-41347.herokuapp.com/task')
.then(res => res.json())
.then(data => setAllTasks(data))
},[])

    return (
        <div className="container">
       

      <h1> I GROW BY HELPING PEOPLE IN NEED.</h1>
    
    
        <div className="row row-cols-4">
           {
               allTasks.map(task => <Task  task={task}>  </Task>  )
           } 
        </div>
        </div>
    );
};

export default Home;