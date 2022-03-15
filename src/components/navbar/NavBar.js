import './navbar.css'
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

export default function NavBar () {
  return (
    <div className="navbar"> 
      <div className="navbar--logo">
        <img className="navbar--image" src="./images/smallLogo.png" alt="longLogo" /> 
        <h3 className="navbar--title">JekaWeb Solutions Inc. </h3>
      </div>
      <div className="navbar--buttons">
          <Button color='secondary'>About Us</Button>
          <Button color='secondary'>Services</Button>
          <Button color='secondary'>Careers</Button>
          <Button color='secondary'>Contact</Button>
          <Button color='secondary' variant='contained'>Email Us <EmailIcon sx={{pl:1}}/></Button>
      </div>
    </div>
  );
}