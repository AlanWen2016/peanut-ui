import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button, { ButtonType, ButtonSize} from './components/Button/button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled className="custom">Hello</Button>
        <Button size={ButtonSize.Large}>Hello</Button>
        <Button size={ButtonSize.Large} onClick={(e)=>{e.preventDefault();alert()}}>Hello</Button>

        <Button size={ButtonSize.Large} btnType={ButtonType.Danger} >Hello</Button>x


        <Button href="wwww.baidu.com" target="_blank" btnType = {ButtonType.Link}>www.baidu.com</Button>

        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <code>
          const a = 135
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
