import './navbar.css'
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-scroll';

export default function NavBar () {
  return (
    <div className="navbar"> 
      <div className="navbar--logo">
        <img className="navbar--image" src="./images/smallLogo.png" alt="longLogo" /> 
        <h3 className="navbar--title">JekaWeb Solutions Inc. </h3>
      </div>
      <div className="navbar--buttons">
        <div className="navbar--buttons-responsive">
        <Link style={{ textDecoration: 'none' }} to="about" spy={true} smooth={true}> 
          <Button color='secondary' >About Us</Button> 
        </Link>
        <Link style={{ textDecoration: 'none' }} to="specialisation" spy={true} smooth={true}> 
          <Button color='secondary'>Services</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="footbar" spy={true} smooth={true}> 
          <Button color='secondary'>Contact</Button>
        </Link>
        </div>
          <Link style={{ textDecoration: 'none' }} to="contact-email" spy={true} smooth={true}> 
            <Button color='secondary' variant='contained'>Email Us <EmailIcon sx={{pl:1}}/></Button>
          </Link>
      </div>
    </div>
  );
}