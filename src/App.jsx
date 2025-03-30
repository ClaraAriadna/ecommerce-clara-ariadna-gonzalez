import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navegacion from './components/navegacion';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Navegacion />
      <Footer />
    </Router>
  )
}

export default App
