import './App.css';
import Balance from './compoents/Balance';
import { Header } from './compoents/Header';
import IncomeExpenses from './compoents/IncomeExpenses';
import TransactionList from './compoents/TransactionList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      </div>
    </div>
  );
}

export default App;
