import React from 'react';
import { Box, Grid, makeStyles, /*IconButton,*/ Hidden } from '@material-ui/core';

// import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

import SearchSection from './SearchSection';
import Customization from './Customization';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import asc1 from './../../../assets/images/asc1.png';
import logo from './../../../assets/images/logo.jpg';
import client1 from './../../../assets/images/client1.png';
import { drawerWidth } from './../../../store/constant';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1.25),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
}));



const Header = (props) => {
    // const { drawerToggle } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
                <Box component="div" width={drawerWidth}>
                    <Grid container justify="space-between" alignItems="center">
                        <Hidden smDown>
                            <Grid item>
                                <Box mt={0.5}>
                                    <img src={client1} height="50" width="80" alt="Logo" />
                                </Box>
                            </Grid>
                        </Hidden>

                        {/* <Grid item>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                // color="inherit"
                                aria-label="open drawer"
                                onClick={drawerToggle}
                            >
                                <MenuTwoToneIcon className={classes.menuIcon} />
                            </IconButton>
                        </Grid> */}
                    </Grid>
                </Box>
            </div>
            <div>
                <Box component="div">
                    <h2 style={{ color: 'black', marginLeft: '200px' }}>Integrated Road Accident Portal(IRAP)</h2>
                </Box>
            </div>
            <div className={classes.grow} />
            <SearchSection theme="light" />
            <Customization />
            <NotificationSection />
            <Grid item>
                                <Box mt={0.5}>
                                    <img src={asc1} height="50" width="80" alt="Logo" />
                                </Box>
                            </Grid>
            <ProfileSection />
        </React.Fragment>
    );
};

export default Header;
