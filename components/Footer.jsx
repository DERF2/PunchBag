import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillBook, AiFillContacts} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 PunchingBag All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillBook />
        <AiFillContacts />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer