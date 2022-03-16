import './app.css'
import NavBar from "./components/navbar/NavBar.js"
import Presentation from "./components/presentation/Presentation.js"
import Specialisation from "./components/specialisation/Specialisation.js"

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Presentation /> 
      <Specialisation /> 
    </div>
  );
}

export default App;


