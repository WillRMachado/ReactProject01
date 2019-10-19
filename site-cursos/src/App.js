import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Cursos from './pages/cursos'
import Contato from './pages/contato'
import Menu from './components/menu'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div>
      <Menu />
      <Cursos />
      <Contato />
      <h1>oi</h1>
    </div>
  );
}

export default App;
