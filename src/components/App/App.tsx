import React, { FunctionComponent } from "react";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <div className='container'>
      <div className='left'>
        <img src='/images/cat.png' alt='cat' height={800} />
      </div>
      <div className='right'>
        <h1 className='title'>
          A's <br /> PLANET A's <br /> PLANET
        </h1>
      </div>
    </div>
  );
};

export default App;
