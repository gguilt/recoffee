import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import FoodList from './components/Meals/FoodList';
import Footer from './components/Layout/Footer';

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
