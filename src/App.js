import './app.css'
import NavBar from "./components/navbar/NavBar.js"
import Presentation from "./components/presentation/Presentation.js"
import Specialisation from "./components/specialisation/Specialisation.js"
import Raitings from "./components/raitings/Raitings.js"
import Footbar from "./components/footbar/Footbar.js"

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Presentation /> 
      <Specialisation /> 
      <Raitings />
      <Footbar /> 
    </div>
  );
}

export default App;


