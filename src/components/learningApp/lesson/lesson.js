import React from 'react';
import PropTypes from 'prop-types';
import ChapterText from './chapterText';
import LessonNavigation from './lessonNavigation';
import RunResult from './result';
import PracticeEditor from '../editor/practiceEditor';
import SplitPane from 'react-split-pane';

import { withStyles } from 'material-ui/styles';

import './lesson.css';

const styles = theme => ({
    splitPane: {
        height: '30%',
    }
});

class Lesson extends React.Component {
    constructor() {
        super();
        this.state = {
            mainPanelSize: window.innerWidth/3.5,
            innerPanelSize: window.innerWidth/3.5,
            dragging: false,
        };

        this.handleEditorChangeSize = this.handleEditorChangeSize.bind(this);

    }


    handleEditorChangeSize(isMaximize) {
        if (!!isMaximize) {
            this.setState({
                mainPanelSize: window.innerWidth/3.5,
                innerPanelSize: window.innerWidth/3.5
            });
        } else {
            this.setState({
                mainPanelSize: window.innerWidth/10,
                innerPanelSize: window.innerWidth/10
            });
        }
    }

    render() {
        return (
            <div className='lesson-container'>
                <div>
                    <SplitPane style={{height: 'calc(100vh - 104px)', position:"inherit"}} split="vertical"
                               size = {this.state.mainPanelSize} minSize={170} maxSize={-340}>
                        <ChapterText/>
                        <div className="interactive-container">

                            <SplitPane size = {this.state.innerPanelSize} minSize={170} maxSize={-170} primary="second">
                                <PracticeEditor changeSize={this.handleEditorChangeSize}/>
                                <RunResult/>
                            </SplitPane>
                        </div>
                    </SplitPane>
                </div>
                <LessonNavigation/>
            </div>
        )
    }
}

Lesson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lesson);
