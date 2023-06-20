import React from 'react';
import clsx from 'clsx';
import { makeStyles, useMediaQuery, useTheme, AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { FaList,FaPhoneAlt,FaImage,FaUserAlt,FaUsers,FaLockOpen,FaLock, FaDatabase } from "react-icons/fa";
import { drawerWidth } from './../../store/constant';
import Header from './Header';
import Sidebar from './Sidebar';
import './Sidebar/MenuList/Sidebar.css';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        width: '50%',
        minHeight: '50vh',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -drawerWidth,
             width: `calc(500% - ${drawerWidth}px)`,
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
         marginLeft: 0,
    },
    main: {
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
    },
    header: {
        zIndex: 1201,
    },
}));

const MainLayout = ({ children }) => {
    const menuItem =[
           
            {
                path:"http://localhost:3001/dashboard/default",
                name:"Dashboard",
                icon:<FaDatabase/>
                
            },
            {
                path:"",
                name:"All Records",
                icon:<FaList/>
            },
            {
                path:"",
                name:"All Expense",
                icon:<FaList/>
            },
            {
                path:"",
                name:"New Records",
                icon:<FaList/>
            },
          
            {
                path:"",
                name:"Logout",
                icon:<FaLock/>
            }
           
    ];
   
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    React.useEffect(() => {
        setDrawerOpen(matchUpMd);
    }, [matchUpMd]);
   
    
    return (
        <div className="container">
         <div className={classes.root}>
            <CssBaseline />

            <AppBar position="fixed" className={classes.header} style={{ backgroundColor: '#ffffff' }}>
                <Toolbar>
                    <Header drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
                </Toolbar>
            </AppBar>
             
           
           <div className="sidebar">
              {
              menuItem.map((item,index)=>(
                <a href={item.path} key={index} className="link" activeclassName="active">
                     <div className="icon">{item.icon}</div>
                    <div style={{ "block" : "none"}} className="link_text">{item.name}</div>
                </a>
            ))
              }
        
        </div>
        <main>{children}</main>
          </div>

           
            <main  className={clsx(classes.content, { [classes.contentShift]: drawerOpen })}>
                <div className={classes.toolbar} />
               
            </main> 
          
        </div>
    
    );
};

export default MainLayout;
