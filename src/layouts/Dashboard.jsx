import React from 'react'
import { Route, Routes, Switch } from 'react-router-dom'
import Deneme from '../pages/deneme'
import WhoIs from '../pages/WhoIs'
import { BrowserRouter} from 'react-router-dom';
export default function Dashboard() {
  return (
    <div >
      <Routes>
        <Switch>
        <Route path="/" component={<WhoIs />} />
        <Route path="/home2" component={<Deneme />} />
        </Switch>
      </Routes>
    </div>
  )
}
