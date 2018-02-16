import React from 'react';
import HomePage from '../components/common/HomePage'
import LearningApp from '../components/common/LearningApp'
import Dashboard from '../components/dashboard/Dashboard'
import {Route} from 'react-router-dom';

class TopContainer extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} component={HomePage}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/learn" component={LearningApp}/>
            </div>
        )
    }
}


export default TopContainer;
