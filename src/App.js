import React from 'react'
import GeradorCPF from './components/geradorcpf'
import Verificador from './components/verificador'
import RastreadorCEP from './components/rastreadorcep'
import GeradorCEP from './components/geradorcep'
import Navbar from './components/navbar'


import './App.css'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="linha">
      <Verificador></Verificador>
      <GeradorCPF></GeradorCPF>
    </div>
    <div className="linha">
      <RastreadorCEP></RastreadorCEP>
      <GeradorCEP></GeradorCEP>
    </div>
    </>
  );
}

export default App;
