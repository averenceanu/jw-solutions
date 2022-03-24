import { useState } from 'react';
import './footbar.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function Footbar () {
  const [values, setValues] = useState({
    name: "",
    email: "",
    description: "",
  })

  const [error, setError] = useState({
    name: false,
    email: false,
    description: false
  })

  const [displayDiv, setDisplayDiv] = useState (false)

  const handleChange = function (event) {
    const {name, value} = event.target
    setValues((prev) => ({...prev, [name]: value}))
    setError((prev) => ({...prev, [name]: false}))
    setDisplayDiv(false)
  }

  const validationForm = function (inputs) {
    let isValid = true; 
    for (let key in inputs) {
      if (values[key] === ""){
        setError((prev) => ({...prev, [key]: true}))
        isValid = false
      }
    }
    return isValid;
  }

  const sendForm = function () {
    if (validationForm(values)){
      console.log("Submit")
      setValues ((prev) => ({...prev, name: "", email: "", description: ""}))
      setDisplayDiv(true)
    } 
  }

  return (
    <div className="footbar" id='footbar'>
      <div className="custom-shape-divider-top-1647462229">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="footbar--main">
        <div className="footbar--main-information">
          <div className="footbar--main-information-innerCircle"> 
            <div className="footbar--main-information-title">
              <h2 className="footbar--h2">Got a Projet? </h2> 
              <h2 className="footbar--h2">Let's Talk!</h2> 
              <h3 className="footbar--phone">  +1 (514)  312-1579</h3>
            </div>
            <div className="footbar--main-information-quote">
              <p>Consulting. Developing. Innovating.</p>
            </div>
          </div>
        </div>
        <div className="footbar--main-contact-form">
          <div style={{display: displayDiv ? 'block' : 'none', color: '#ed9b63', fontFamily: "'Exo 2'", fontSize: '120%', textAlign: 'center'}}> <h3> Thank you. <br/> You should hear back from us soon! </h3> </div>
          <h2 className="footbar--main-contact-title"> Estimate your Project? </h2>
          <FormControl fullWidth={true} required={true} sx={{color:'#e3e2cb' }} id='contact-email'> 
            <TextField 
              label="Name or Company Name: " 
              color="secondary" 
              focused  
              sx={{p:3, input: { color: '#ffffff'}}}
              value={values.name}
              name={'name'}  
              onChange={handleChange}
              error={error.name}
              />
            <TextField 
              label="Your Email Address: " 
              color="secondary"  
              focused 
              sx={{p:3, input: { color: '#ffffff' }}}
              value={values.email}  
              name={'email'}
              onChange={handleChange}
              error={error.email}
              />
            <TextField 
              label="Tell us more about your Projet:" 
              color="secondary" 
              focused sx={{p:3 }} 
              multiline 
              inputProps={{ style: { color: "#ffffff" } }}
              value={values.description}
              name={'description'}
              onChange={handleChange}
              error={error.description}
              />
            <div className="footbar--buttons">
              <Button onClick={() => setValues ((prev) => ({...prev, name: "", email: "", description: ""}))} color='info' variant='contained' fullWidth>Clear</Button>
              <Button onClick={() => sendForm()} color='secondary' variant='contained' fullWidth>Send</Button>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  )
}