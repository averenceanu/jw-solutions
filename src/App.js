import './app.css'
import NavBar from "./components/navbar/NavBar.js"
import Presentation from "./components/presentation/Presentation.js"
import About from "./components/about/About.js"
import Specialisation from "./components/specialisation/Specialisation.js"
import Footbar from "./components/footbar/Footbar.js"

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Presentation /> 
      <About /> 
      <Specialisation />
      <Footbar /> 
    </div>
  );
}

export default App;


