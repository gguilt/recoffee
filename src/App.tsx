import React from 'react';
import './App.css';
import Header from './components/Header';
import FoodList from './components/FoodList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <FoodList />

      <Footer />
    </div>
  );
}

export default App;
