import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
//页面级加载
import App from 'PAGES/app';
import Home from 'PAGES/home';

const route = () => (
    <HashRouter>
        <App>
            <Route exact path='/' component={Home}/>
            
        </App>
   </HashRouter>
);

export default route;

