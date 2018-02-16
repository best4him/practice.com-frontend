import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import MenuIcon from 'material-ui-icons/KeyboardBackspace';
import ExistToAppIcon from 'material-ui-icons/ExitToApp';
import AccountCircle from 'material-ui-icons/AccountCircle';

import Menu, { MenuItem } from 'material-ui/Menu';
import {Backburger, ArrowLeftThick} from 'mdi-material-ui'

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    manageAccountIcons: {
        padding:3
    }
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                            <ArrowLeftThick />
                        </IconButton>
                            <Typography  type="title" color="inherit" className={classes.flex}>
                                Course Name
                            </Typography>

                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="contrast"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>
                                       Profile
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <ExistToAppIcon className={classes.manageAccountIcons}/>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                        {auth &&
                            <div>
                                <Typography  type="headline" color="inherit" className={classes.flex}>
                                    Welcome Andrei
                                </Typography>
                            </div>
                        }
                        {!auth &&
                        <div>
                            <Link to="/">
                                <Button color="contrast">Home</Button>
                            </Link>
                        </div>

                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
