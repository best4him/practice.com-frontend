import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
                <Link to="/dashboard">Learn App</Link>
            </div>
        )
    }
}

export default HomePage;
