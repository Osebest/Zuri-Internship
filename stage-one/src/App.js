import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";
import Modal from "./components/Modal";
import PlaceToStay from "./components/PlaceToStay/PlaceToStay";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Modal />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/place-to-stay"
            element={<PlaceToStay />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
