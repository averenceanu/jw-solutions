import './footbar.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function Footbar () {
  return (
    <div className="footbar">
      <div className="custom-shape-divider-top-1647462229">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="footbar--main">
        <div className="footbar--main-information">
          <div className="footbar--main-information-innerCircle"> 
            <div className="footbar--main-information-title">
              <h2>Got a Projet? </h2> 
              <h2 sx={{m:'0px'}}>Let's Talk!</h2> 
            </div>
            <div className="footbar--main-information-quote">
              <p>Consulting. Developing. Innovating.</p>
            </div>
          </div>
        </div>
        <div className="footbar--main-contact-form">
          <h2 className="footbar--main-contact-title"> Estimate your Project? </h2>
          <FormControl fullWidth={true} required={true} sx={{color:'#e3e2cb' }}> 
            <TextField label="Name or Company Name: " color="secondary" focused  sx={{p:3, color:'#e3e2cb', fontFamily:'Exo 2'}}/>
            <TextField label="Your Email Address: " color="secondary"  focused sx={{p:3}}/>
            <TextField label="Tell us more about your Projet:" color="secondary"  focused sx={{p:3}}/>
            <Button color='secondary' variant='contained'>Send</Button>
          </FormControl>
        </div>
      </div>
    </div>
  )
}