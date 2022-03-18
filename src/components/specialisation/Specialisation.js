import './specialisation.css';

export default function Specialisation () {
  return (
    <div className="specialisation">
      <div className="specialisation--what-we-do">
        <div className="specialisation--title">
          <h1>What we do</h1> 
        </div>
        <div className="specialisation--description"> 
          <p> JekaWeb Solutions Inc. is an independent  IT consulting company guiding businesses. Our specialty is software development, web applications and corporate IT solutions. We take care of the technologies so you can focus on your business.</p>
        </div>
      </div>
      <div className="specialisation--what-we-do">
        <div className="specialisation--description"> 
          <p>Some random text here about the goal of the company.</p>
        </div>
        <div className="specialisation--title">
          <h1>Our goals</h1> 
        </div>
      </div>
      <div className="specialisation--shape"> 
        <div class="custom-shape-divider-top-1647462229">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="specialisation--image-div" style ={{backgroundImage: `url(./images/image1.jpeg)`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', width: 'auto', height: '60vh'}}>
          <h2 className="specialisation--tag"> #Success   </h2>
          <h2 className="specialisation--tag"> #Determination </h2>
        </div>
      </div>
    </div>
  )
}

