import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Title">CONSOLE CHANNEL SHEET</div>
        <div className="Information">
          <div className="Information-title">
            <div>Title :</div>
            <div>Date :</div>
            <div>Location :</div>
            <div>Memo :</div>
          </div>
          <div className="Information-textarea">
            <div className="Information-input">
              <textarea
                className="Information-input-text"
                placeholder="title"
                typeof="string"
              />
            </div>
            <div className="Information-input">
              <textarea
                className="Information-input-text"
                placeholder="title"
              />
            </div>
            <div className="Information-input">
              <textarea
                className="Information-input-text"
                placeholder="title"
              />
            </div>
            <div className="Information-input">
              <textarea
                className="Information-input-text"
                placeholder="title"
              />
            </div>
          </div>
        </div>

        {/* <div className="Information">
          <div>
            <textarea className="Information-input" placeholder="title" />
          </div>
          <div>
            <span className="Information-title">Date :</span>
          </div>
          <div>
            <span className="Information-title">Location :</span>
          </div>
          <div>
            <span className="Information-title">Memo :</span>
          </div>
        </div> */}
      </header>
      <nav>Input / Aux / Matrix</nav>
      <main>channel sheet</main>
    </div>
  );
}

export default App;
