import React from 'react';

import {Route, Link} from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to="/learn">Go to Course</Link>
            </div>
        )
    }
}

export default Dashboard;
