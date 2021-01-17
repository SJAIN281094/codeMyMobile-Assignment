import React from 'react';
// import { Link } from 'react-router-dom';
import { Components, Icons } from '../../../../utils/material-ui';

const { withStyles, AppBar, Toolbar, Typography, IconButton } = Components;
const { MenuIcon } = Icons;

const styles = (theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
      zIndex: theme.zIndex.drawer + 101,
    },
    loginBtn: {
      textDecoration: 'none',
      color: theme.palette.common.white,
    },
  };
};

const Header = withStyles(styles)(({ classes, title, onMenuClick }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.aboveDrawer}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </div>
));

export default Header;
