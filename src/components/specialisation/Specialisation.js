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
      <div className="specialisation--image-div">
        <img className="specialisation--image" src="./images/image.jpeg" alt="computerImage" />
      </div>
    </div>
  )
}
