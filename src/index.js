import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import CustomerForm from "./components/customer";
import CustomerPage from "./pages/CustomerPage";


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />

            <Route exact path="/customer" component={CustomerPage} />
            <Route  exat path="/addCustomer"  render={(props) =>
                <CustomerForm {...props} submit={true} service={"customer notYetImplemented"}/>} />

            <Route  exat path="/updateCustomer"  render={(props) =>
                <CustomerForm {...props} new={false} service={"update customer notYetImplemented"}/>} />
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));