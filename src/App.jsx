import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import '../styles.css';

function App () {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  )

}

export default App;
