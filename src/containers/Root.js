/**
 *  src/containers/Root.js
 *  Base container, doesn't do much other than configure and bind the store
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import configureStore from '../configureStore'
import TopContainer from './TopContainer'

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router path="/">
                    <TopContainer />
                </Router>
            </Provider>
        )
    }
}

export default Root;
