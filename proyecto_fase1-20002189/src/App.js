import React, { useState, useCallback } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Login from './logins/components/pages/Login.js';
import Menu from './menu/components/pages/Menu.js';
import Productos from './productos/components/pages/Productos.js';
import Clientes from './clientes/components/pages/clientes.js';
import Ventas from './ventas/components/pages/Ventas.js';
import SignUp from './logins/components/pages/SignUp.js';
import NewClient from './clientes/components/pages/newClient.js';
import UpdateClient from './clientes/components/pages/updateClient.js';
import DeleteClient from './clientes/components/pages/DeleteClient.js';
import NewProduct from './productos/components/pages/NewProduct.js';
import UpdateProduct from './productos/components/pages/UpdateProduct.js';
import DeleteProduct from './productos/components/pages/DeleteProduct.js';

import { AuthContext } from './shared/context/auth-context.js';

const App = () =>{
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(false);
    setUserId(null);
  }, []);
  console.log("TOKEN: " + token);
  console.log("ID: " + userId);


  let routes;
  
  if (!token) {
    routes = (
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

          <Route path="/SignUp">
            <SignUp/>
          </Route>

          <Route path="/NewClient">
            <NewClient/>
          </Route>

          <Route path="/updateClient">
            <UpdateClient/>
          </Route>

          <Route path="/DeleteClient">
            <DeleteClient/>
          </Route>

          <Route path="/NewProduct">
            <NewProduct/>
          </Route>

          <Route path="/UpdateProduct">
            <UpdateProduct/>
          </Route>

          <Route path="/DeleteProduct">
            <DeleteProduct/>
          </Route>

          <Redirect to="/" />

        </Switch>
        );
  } else {
        routes = (
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
      
            <Route path="/SignUp">
              <SignUp/>
            </Route>
      
            <Redirect to="/login" />
          </Switch>
        );
  }
  

  return (
    <AuthContext.Provider

    value={{ 
      isLoggedIn: !!token,
      token: token, 
      login: login, 
      logout: logout,
      userId: userId 
    }}>

        <Router>
          <main>{routes}</main>
        </Router>
    </AuthContext.Provider>
    
  );
}

export default App;
