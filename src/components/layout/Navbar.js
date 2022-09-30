import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar=(props)=> {

    
        return (
            <nav className="navbar bg-primary">
               <h1><i className={props.icon}/>{props.title}</h1>
               <div style={{float:'right'}}>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               </div>
            </nav>
        )
}

Navbar.defaultProps={
    title:'hello',
    icon:'fab fa-github'
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
