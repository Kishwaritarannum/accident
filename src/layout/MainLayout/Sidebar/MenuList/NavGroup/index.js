import React from 'react';

import { makeStyles, List, Typography } from '@material-ui/core';

import NavItem from './../NavItem';
import NavCollapse from './../NavCollapse';
// import Button from './Button';

const useStyles = makeStyles((theme) => ({
    menuCaption: {
        ...theme.typography.menuCaption,
    },
    subMenuCaption: {
        ...theme.typography.subMenuCaption,
    },
}));

const NavGroup = (props) => {
    const { item } = props;
    const classes = useStyles();
    const items = item.children.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <List
            subheader={
                <Typography variant="caption" className={classes.menuCaption} display="block" gutterBottom>
                    {item.title}
                    {item.caption && (
                        <Typography variant="caption" className={classes.subMenuCaption} display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )}
                </Typography>
            }
        >
            {items}
        </List>
    );
};

export default NavGroup;
