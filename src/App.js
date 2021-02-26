import './App.css';
import Balance from './compoents/Balance';
import { Header } from './compoents/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Balance/>
      </div>
    </div>
  );
}

export default App;
