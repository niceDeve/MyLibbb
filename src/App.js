import "./App.css";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="headerStyle">
          <a href={""}>
            <li className="menuItem">
              <GiMagnifyingGlass /> Search
            </li>
          </a>{" "}
          <a href={""}>
            <li className="menuItem">
              <BsFillBookmarksFill /> My library
            </li>
          </a>{" "}
          <li className="menuItem">
            <AiFillQuestionCircle /> About
          </li>
          <li className="menuItem">
            <HiDocumentText /> Docs
          </li>
        </header>
      </div>
    );
  }
}

export default App;
