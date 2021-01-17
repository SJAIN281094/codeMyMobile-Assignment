import React, { useState } from 'react';
import { Components } from '../../../utils/material-ui';
import Drawer from './Drawer';
import Header from './Header';

const { withStyles } = Components;

const styles = (theme) => {
  return {
    root: {
      flexGrow: 1,
    },
  };
};

const HeaderWithDrawer = withStyles(styles)(({ classes, title }) => {
  const [drawer, setDrawer] = useState(false);
  const [headerTitle, setTitle] = useState(title);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <Header title={headerTitle} onMenuClick={toggleDrawer} />
      <Drawer
        open={drawer}
        onClose={toggleDrawer}
        setTitle={setTitle}
        variant="temporary"
      />
    </div>
  );
});

export default HeaderWithDrawer;
