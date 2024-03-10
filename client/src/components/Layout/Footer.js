import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='text-center'>All Rights Reserved &copy; E-commerce</h1>
        <p classname="text-center mt-3" align='center'>
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|<Link to="/policy">Privacy Policy</Link>
        </p>
    </div>
  );
};

export default Footer;
