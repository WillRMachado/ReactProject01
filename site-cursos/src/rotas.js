import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Curso from './pages/cursos';
import Contato from './pages/contato';
export default props => (
<Switch>
<Route path='/cursos' component={Curso} />
<Route path='/contato' component={Contato} />
<Route path='*' component={Curso} />
</Switch>
)

