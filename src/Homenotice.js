import React from 'react';
import { Link } from 'react-router-dom';
import './Homenotice.css';
import { useStateValue } from './StateProvider';

const Homenotice = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="notice">
        <div className='notice__brdr'>
        
        <div className="notice__recommend">
          <p>See personalized recommendations</p>
        </div> 
       <Link to={!user && "/Login"}>
           <div className='notice__button'>
           <button>sign in</button>
           </div>
            </Link> 
        <div className="notice__newCustomer">
          <p>New customer?<span>start here.</span> </p>
          {/* <Link to={!user && "/Login"}><span>start here.</span> </Link> */}
             
        </div> 
        </div>  
       </div>
    );
}

export default Homenotice;
