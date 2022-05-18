import React from 'react';
import logoTrollFace from '../images/logoTrollFace.png';

const Navbar = () => {
  return (
    <nav>
      <img
        className="nav--image"
        src={logoTrollFace}
        alt="Troll face logo"
      />
      <h2 className='nav--title'>Meme Generator</h2>
      <h3 className='nav--desc'>React Course - Project 3</h3>
    </nav>
  )
}

export default Navbar;