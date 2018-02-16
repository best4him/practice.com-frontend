import React from 'react';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

import './lessonNavigation.css'

class LessonNavigation extends React.Component {

    render() {

        return (
            <div className='ln-container'>
                <Button  dense className='ln-button' id="previous-button">
                    Report
                </Button>
                <div className='ln-buttons-container'>
                    <Button  dense className='ln-button' id="previous-button">
                        Back
                    </Button>
                    <div className="exercise-count">
                        <div>
                            <Typography type="subheading"  align="center" color="inherit">
                                1/10
                            </Typography>
                        </div>
                    </div>
                    <Button  dense className='ln-button' id="next-button">
                        Next
                    </Button>
                </div>

                <Button  dense className='ln-button' id="next-button">
                        Content
                    <Icon className="rightIcon">menu</Icon>
                </Button>



            </div>
        )
    }
}

export default LessonNavigation;
