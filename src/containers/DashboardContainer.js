import React from 'react';
import {Route} from 'react-router-dom';

import LearningApp from '../components/learningApp/LearningApp/';
import DashboardComponent from '../components/dashboard/Dashboard/';
class DashboardContainer extends React.Component {
    render () {
        return (
            <div>
                <Route path="/dashboard" component={DashboardComponent}/>
                <Route path="/learn" component={LearningApp}/>
            </div>
        )
    }
}


export default DashboardContainer;
