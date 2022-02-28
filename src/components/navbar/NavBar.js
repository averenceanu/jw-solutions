import './navbar.css'

export default function NavBar () {
  return (
    <div className="navbar"> 
      <div className="navbar--logo">
        <img className="navbar--image" src="./images/smallLogo.png" alt="longLogo" /> 
        <h3 className="navbar--title">JekaWeb Solutions Inc. </h3>
      </div>
      <div className="navbar--buttons">
        About Us
        Services 
        Careers
        Contact
        Email Us 
      </div>
    </div>
  )
}