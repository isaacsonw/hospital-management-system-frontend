import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'semantic-ui-css/semantic.min.css';
import 'react-datetime/css/react-datetime.css';
import './index.css';
import  "toastr/build/toastr.css";
const {REACT_APP_GRAPHQLSERVER} = process.env;
let promiselib = require('bluebird');
promiselib.config({
    warnings: false,
    longStackTraces: true,
    cancellation: true,
    monitoring: true
});
const httpLink = new HttpLink({ uri: REACT_APP_GRAPHQLSERVER });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
