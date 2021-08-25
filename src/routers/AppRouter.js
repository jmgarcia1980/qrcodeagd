import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";
import { GeneraQRCode } from '../component/GeneraQRCode';
import { QRScann } from '../component/QRScann';
import { DashBoardRoute } from './DashBoardRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                        <Route exact path ="/qr" component ={ QRScann } />
                        <Route exact path ="/genera" component ={ GeneraQRCode } />
                        
                        <Route path ="/" component ={ DashBoardRoute } />
                        
                        <Redirect to="/" />
                    </Switch>
            </div>
        </Router>
    )
}

