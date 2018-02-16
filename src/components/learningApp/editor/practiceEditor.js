import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from './codeMirror';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';


import CodeIcon from 'material-ui-icons/Code';
import PlayIcon from 'material-ui-icons/PlayArrow';
import { ArrowExpandAll } from 'mdi-material-ui';

import './practiceEditor.css';

class PracticeEditor extends React.Component {
    constructor() {
        super();

        this.state = {
            isMaximize: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isMaximize: !this.state.isMaximize
        });

        this.props.changeSize(this.state.isMaximize);
    }

    render () {
        return (
            <div className="edit-container">
                <div className="edit-content">
                    <div className="editor-top-bar">
                        <CodeIcon className="editor-icon" />
                        <div className="editor-minimize">
                            <IconButton aria-label="Expand" placeholder="Expand" onClick={this.handleClick}>
                                <Tooltip title="Expand">
                                    <ArrowExpandAll />
                                </Tooltip>
                            </IconButton>
                        </div>
                    </div>
                    <div className="editor-container">
                        <CodeMirror/>
                    </div>
                    <div className="editor-bottom-bar">
                        <div>
                            <Button color="accent" dense className='run-button' id="run-button">
                              <PlayIcon/>
                                Run
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PracticeEditor.propTypes = {
    changeSize: PropTypes.func
};

export default PracticeEditor
