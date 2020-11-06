import React from "react";
import { Spring } from 'react-spring/renderprops'


function Introduction(){
    return(<Spring 
    from={{ opacity: 0 }}
    to={{opacity: 1}}
    config={{delay:5000, duration:1000}}
    >
   {props => <div className="name" style={props}>
            <p> I am</p>
            <h2>Durodola Abdulkabir</h2>
            <p>Front End Web Developer</p></div>}
  </Spring>)
};


export default Introduction;