import React from 'react';
import "./Contact.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact() {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>STAY CONNECTED WITH US:</span>
        <div className="mail">
          <input type="text" placeholder='Enter your E-mail' />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <PinterestIcon/>
          <GoogleIcon/>
        </div>
      </div>
    </div>
  )
}

export default Contact