import "./App.scss";
import { Hompage } from "./components/Hompage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hompage />} />
        {/* <Route path="/user/:cell" element={<PostDetails posts={posts}/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
