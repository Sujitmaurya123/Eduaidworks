import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        < >
        <div className='nav_main'>
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/school">Schools</Link></li>
                <li><Link to="/scholarships">Scholarships</Link></li>
                <li><Link to="/exam">Exam</Link></li>
              
            
            </ul>
            <div className='nav2'>

                    <li >
                        <Link to="/login" >
                            <button type="button" class="btn btn-primary ">LOGIN</button>
                        </Link>
                    
                        <Link to="/signup" >
                            <button type="button" class="btn btn-primary ">SIGNUP</button>
                        </Link>
                    </li> 
            </div>
            
        </div>
        </>
    )
}
export default Nav;