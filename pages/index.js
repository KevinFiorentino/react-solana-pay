import React from "react";
import HeadComponent from '../components/Head';

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> —△🌈 Pink Floyd GIF Store</p>
          <p className="sub-text">The Dark Side Of The Store</p>
        </header>

        <main>
          <img src="https://media4.giphy.com/media/l0MYKMrQnwNvLjYhW/giphy.gif?cid=ecf05e47tu4c6ypa604nj709idisnd4iuhfliiohjmbxlkhk&rid=giphy.gif&ct=g" alt="The Dark Side of The Moon" />
        </main>

        <div className="footer-container">
        </div>
      </div>
    </div>
  );
};

export default App;
