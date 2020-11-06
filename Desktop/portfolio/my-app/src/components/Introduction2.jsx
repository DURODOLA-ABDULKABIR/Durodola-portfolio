import React from "react";
import { Spring } from 'react-spring/renderprops'


function Introduction2(){
    return(<Spring 
    from={{ opacity: 5, transformY: 180}}
    to={{opacity: 0, transformY:0}}
    config={{duration:5000}}
    >
   {props => <div className="greeting" style={props}>
     <h3>Hi there!</h3>
     <p>I design and develop experiences that make people's lives easy</p>
   </div>}
  </Spring>)
  
};

export default Introduction2;