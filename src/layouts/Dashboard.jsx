import React from 'react'
import { Route,Router ,Switch } from 'react-router-dom'
import Deneme from '../pages/deneme'
import WhoIs from '../pages/WhoIs'
export default function Dashboard() {
  return (
    <div >
      <Router>
        <Switch>
        <Route path="/" component={<WhoIs />} />
        <Route path="/home2" component={<Deneme />} />
        </Switch>
      </Router>
    </div>
  )
}
