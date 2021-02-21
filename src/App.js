import ReactDOM from 'react-dom';
import React from 'react'
import { NavLink, Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Pipelines from './components/Pipelines/Pipelines';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div class="container-fluid fixed-top bg-dark shadow top-nav">
          <div class="row collapse d-flex h-100 position-relative">
              <div class="col-3 px-4 w-sidebar navbar-collapse collapse d-none d-md-flex">
                  <a href="#" class="navbar-brand ds-display-5">Brand</a>
              </div>
              <div class="col px-3 px-md-0 py-3">
                  <div class="d-flex">
                      <a data-toggle="collapse" href="#" data-target=".collapse" role="button" class="">
                          <i class="fa fa-bars fa-lg"></i>
                      </a>
                      <a href="#modal" data-target="modal" data-toggle="modal" class="ml-auto text-white"><i class="fa fa-cog"></i></a>
                  </div>
              </div>
          </div>
        </div>
        <div class="wrapper">
          <div  id="nav" >
            <Nav />
          </div>
          <div class="p-3" id="content">
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/pipelines" component={Pipelines} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>     
    </div>
  );
}

export default App;


