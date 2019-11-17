import React from 'react';
import Routes from './routes';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
   <div>
     <NavBar/>
     <Routes />
     <Footer />
   </div>
  );
}

export default App;
