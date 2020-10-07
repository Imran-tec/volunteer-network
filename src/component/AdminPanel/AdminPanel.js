import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const AdminPanel = (props) => {
    const {name,email, date,title, _id} = props.singleUser;
    
    console.log(props)

  
    return (
        <div>
           
         <div className="row">
        
          <div className="col-sm-2">
               {name}
          </div> 
          <div className="col-sm-4">
             {email}
          </div>
          <div className="col-sm-2">
                 {date}
          </div>
          <div className="col-sm-2">
             {title}
          </div>
           <div className="col-sm-1">
             <button style={{marginBottom:'6px',backgroundColor:'red',color:'white'}} onClick = {() =>props.handleDeleteUser(_id)}> <DeleteIcon></DeleteIcon></button>
          </div>
         </div>
        </div>
    );
};

export default AdminPanel;