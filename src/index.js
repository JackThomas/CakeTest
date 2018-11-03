import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Nav from './components/Nav';
import CakeList from './components/CakeList';
import CakeEdit from './components/CakeEdit';
import CakeAdd from './components/CakeAdd';
import './scss/app.scss';

ReactDOM.render( 
    <BrowserRouter>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={CakeList} />
                <Route exact path="/cake" render={() => (
                    <Redirect to="/" />
                )}/>
                <Route exact path="/cake/:id" component={CakeEdit} />
                <Route exact path="/add" component={CakeAdd} />
                <Route render={function () {
                    return <p className="error">Not Found</p>
                }} />
            </Switch>
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);
