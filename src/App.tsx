import React, { useState } from "react";
import "./App.css";
import Information from "./container/Information";
import Navigation from "./container/Navigation";
import ChannelSheet from "./container/ChannelSheet";

function App() {
  const [menu, setMenu] = useState(0);
  return (
    <div className="container">
      <div className="App">
        <header>
          <div className="title">CONSOLE CHANNEL SHEET</div>
        </header>
        <div className="information">
          <Information />
        </div>
        <nav className="navigation">
          <Navigation menu={menu} setMenu={setMenu}></Navigation>
        </nav>
        <main className="channelSheet">
          <ChannelSheet menu={menu} />
        </main>
      </div>
    </div>
  );
}

export default App;
