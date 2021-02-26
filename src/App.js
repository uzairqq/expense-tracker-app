import './App.css';
import Balance from './compoents/Balance';
import { Header } from './compoents/Header';
import IncomeExpenses from './compoents/IncomeExpenses';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      </div>
    </div>
  );
}

export default App;
