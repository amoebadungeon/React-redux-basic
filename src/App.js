import logo from './logo.svg';
import './App.css';
import CounterToy from './component/test-redux'
import {Provider} from 'react-redux'
import store  from './component/redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
        <CounterToy></CounterToy>
        </Provider>
      
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
