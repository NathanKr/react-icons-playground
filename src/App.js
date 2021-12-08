import "./App.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h2>This is bootstrap icon using react-icons for better performnce</h2>
      <BsFillAlarmFill />
      <h2>This is font awesome icon using react-icons for better performnce</h2>
      <FaGithub />
      <h2>This image reside in another server</h2>
    </div>
  );
}

export default App;
