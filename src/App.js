import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import  { BreakpointProvider } from 'react-socks';
import { useState } from "react";

function App() {
  const [dim, setDim] = useState(false);

  const dimPage = action => {
    if (action === 'run') {
      setDim(true);
    } else {
      setDim(false);
    }
  }

  return (
    <BreakpointProvider>
    <div className="App" id="app">
      <Header dimPage={dimPage} />
      <Main dimPage={dimPage}/>
      { dim && (<div className="dim-div"></div>)}
    </div>
    </BreakpointProvider>
  );
}

export default App;

