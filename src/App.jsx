import { useState } from 'react'
import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
import { GlobalProvider } from './Context/GlobalState'

function App() {

  return (
    <GlobalProvider className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
