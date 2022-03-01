import './navbar.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function NavBar () {
  return (
    <div className="navbar"> 
      <div className="navbar--logo">
        <img className="navbar--image" src="./images/smallLogo.png" alt="longLogo" /> 
        <h3 className="navbar--title">JekaWeb Solutions Inc. </h3>
      </div>
      <div className="navbar--buttons">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>About Us</Button>
          <Button>Services</Button>
          <Button>Careers</Button>
          <Button>Contact</Button>
          <Button>Email Us</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}