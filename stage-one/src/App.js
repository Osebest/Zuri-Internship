import "./App.scss";
import { Hompage } from "./components/Hompage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
