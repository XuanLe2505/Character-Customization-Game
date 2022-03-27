// import { useState } from "react";
import "./App.css";
import Header from "./component/Header";

import Main from "./component/Main";

const total = {
  body: 17,
  hair: 73,
  eyebrows: 15,
  eyes: 24,
  mouths: 24,
  hats: 28,
  glasses: 17,
  clothes1: 5,
  clothes2: 5,
  clothes3: 9,
};

function App() {
  return (
    <div className="App">
      <Header />
      <Main
        total={total}
        // listData={listData}
      />
    </div>
  );
}

export default App;
