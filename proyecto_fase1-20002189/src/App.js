import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Login from './logins/components/pages/Login.js';
import Menu from './menu/components/pages/Menu.js';
import Productos from './productos/components/pages/Productos.js';
import Clientes from './clientes/components/pages/clientes.js';
import Ventas from './ventas/components/pages/Ventas.js';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Menu/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/productos">
            <Productos/>
          </Route>

          <Route path="/clientes">
            <Clientes/>
          </Route>

          <Route path="/ventas">
            <Ventas/>
          </Route>

          <Redirect to="/" />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
