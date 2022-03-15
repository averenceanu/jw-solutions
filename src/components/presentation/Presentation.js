import "./presentation.css"
import Button from '@mui/material/Button'

export default function Presentation () { 
  return (
    <div className = "presentation" style ={{backgroundImage: `url(/images/baner.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
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
    </div>
  )
}

