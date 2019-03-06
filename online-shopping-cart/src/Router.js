import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'

const Router = () =>  (
<Switch>
    <Route exact path='/' compenent= {HomePage} />
    <Route exact path='/cart' compenent= {CartPage} />
</Switch>
)

export default Router;