import logo from './logo.svg';
import './App.css';
//import notify from './notify';

function App() {

  const onClick=()=>{
    import('./notify').then(result=>result.default());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>hello world!</p>
      </header>
    </div>
  );
}

export default App;
