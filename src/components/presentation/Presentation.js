import {useState, useRef, useEffect} from "react"; 
import "./presentation.css"
import Typography from '@mui/material/Typography';

export default function Presentation () { 
  return (
    <div className = "presentation" style ={{backgroundImage: `url(/images/baner.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
        <div className="presentation--title"> 
          <h1 className='presentation--coorporate'>Corporate</h1>
          <h1 className='presentation--it' >IT </h1>
          <h1 className='presentation--coorporate'>Solutions</h1>
        </div>
        <div className="presentation--description">
          <p>Consulting. Developing. Building.</p>
        </div>
    </div>
  )
}

