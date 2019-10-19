import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';

import React from 'react';
import Menu from './components/menu'
import Rotas from './rotas'




function App() {
  return (
    <div>
      <Menu />
      <Rotas />
    </div>
  );
}

export default App;
