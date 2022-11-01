import "./App.scss";
import profileImage from "./assets/profile__img.png";
import slack from "./assets/slack.png";
import github from "./assets/Icon.png";
import ingress from "./assets/I4G.png";
import {BsDot} from "react-icons/bs"

function App() {
  return (
    <div className="container pt-5 pb-3">
      <div className="container d-flex flex-column justify-content-between align-items-center my-4 mb-5">
        <div className="container d-flex flex-column align-items-center">
          <img src={profileImage} alt="" id="profile__img" />
          <h3 className="pt-4 text-center" id="slack">
            Osebest Ephraim
          </h3>
          <p id="twitter">@Osebest7</p>
        </div>
        <div className="w-100 my-4 px-3">
          <a
            href="https://twitter.com/Osebest7"
            className="w-100 btn links py-3 mb-4"
          >
            Twitter
          </a>
          <a
            target="_blank"
            id="btn__zuri"
            href="https://training.zuri.team/"
            className="w-100 btn links py-3 mb-4"
          >
            Zuri Team
          </a>
          <a
            target="_blank"
            id="books"
            href="http://books.zuri.team/"
            className="w-100 btn links py-3 mb-4"
          >
            Zuri Books
          </a>
          <a
            target="_blank"
            id="book__python"
            href="https://books.zuri.team/"
            className="w-100 btn links py-3 mb-4"
          >
            Python Books
          </a>
          <a
            target="_blank"
            id="pitch"
            href="https://background.zuri.team/"
            className="w-100 btn links py-3 mb-4"
          >
            Background Check for Coders
          </a>
          <a
            target="_blank"
            id="book__design"
            href="https://books.zuri.team/design-rules"
            className="w-100 btn links py-3 mb-4"
          >
            Design Books
          </a>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <img src={slack} alt="slack" />
            <img src={github} alt="github" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center py-4 footer">
        <h4>
          Zuri<span>.</span>Internship
        </h4>
        <small className="text-muted">HNG Internship 9 Frontend Task</small>
        <img src={ingress} alt="ingress" />
      </div>
    </div>
  );
}

export default App;
