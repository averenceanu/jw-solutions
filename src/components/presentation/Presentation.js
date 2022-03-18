import "./presentation.css"
import Button from '@mui/material/Button'

export default function Presentation () { 
  return (
    <div className = "presentation" style ={{backgroundImage: `url(/images/baner.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 'auto', height: '90vh'}}>
      <div className="presentation--title"> 
        <h1 className='presentation--coorporate'>Corporate</h1>
        <h1 className='presentation--it' >IT </h1>
        <h1 className='presentation--coorporate'>Solutions</h1>
      </div>
      <div className="presentation--logo">
        <p>Consulting. Developing. Innovating.</p>
      </div>
      <div className="presentation--description">
        <p>Our goal is to provide your business with all the tools to best use technology and software for maximal benefit. </p>
      </div> 
      <div className="presentation--button">
        <Button color='secondary'> About Us </Button>
        <Button color='info' variant='contained'> Contact Us </Button>
      </div>
      <div class="custom-shape-divider-bottom-1647462308">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

