import React from 'react'
import { Navbar } from '../component/ui/Navbar'
import { Switch, Router, Redirect } from 'react-router-dom'
import { QRScann } from '../component/QRScann'
import { GeneraQRCode } from '../component/GeneraQRCode'

//import { createBrowserHistory } from "history";

export const DashBoardRoute = () => {

  // const customHistory = createBrowserHistory();

    return (
        <>
          <Navbar />

          <div>
            <Switch>
                <Router exact path="/qr" component={ QRScann } />
                <Router exact path="/genera" component={ GeneraQRCode } />
                
                <Redirect to="/" />
                
            </Switch>
          </div>

        </>
    )
}

