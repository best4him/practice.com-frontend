import React from 'react';
import Lesson from "../learningApp/lesson/lesson";
import TopBar from '../common/TopBar'

class LearningApp extends React.Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Lesson/>
            </div>
        )
    }
}

export default LearningApp;
