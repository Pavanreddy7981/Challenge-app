import React from 'react'
import "./App.css"
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
    //Using BEM Convention 
    <div className="app">
      <Header />
      <Home />
    </div>
  )
}

export default App
