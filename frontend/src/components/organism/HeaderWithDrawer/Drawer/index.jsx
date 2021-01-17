import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Components, Icons } from '../../../../utils/material-ui';

const {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} = Components;

const { WebIcon } = Icons;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const styles = (theme) => {
  return {
    root: {
      '& .MuiDrawer-paperAnchorLeft': {
        minWidth: '160px',
      },
    },
    alignContent: {
      alignSelf: 'center',
    },
    activeListItem: {
      color: theme.palette.primary.main,
    },
    toolbarMargin: theme.mixins.toolbar,
  };
};

const NavListItem = withStyles(styles)(
  ({ classes, Icon, text, active, ...other }) => (
    <ListItem component={NavLink} {...other}>
      <ListItemIcon
        classes={{
          root: clsx({ [classes.activeListItem]: active }),
        }}
      >
        <Icon />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: clsx({
            [classes.activeListItem]: active,
          }),
        }}
      >
        {text}
      </ListItemText>
    </ListItem>
  )
);

const NavItem = (props) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path="/" render={() => <NavListItem {...props} />} />
  </Switch>
);

const SideDrawer = ({ classes, variant, open, onClose, setTitle }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(navItems('list'));
  }, []);

  return (
    <Container justify="space-between">
      <Item>
        <Drawer
          className={classes.root}
          open={open}
          onClose={onClose}
          variant={variant}
        >
          <div className={classes.toolbarMargin} />
          <List>
            {items
              ?.filter(({ hidden }) => !hidden)
              ?.map(({ label, disabled, Icon, link }, i) => (
                <NavItem
                  to={link}
                  text={label}
                  Icon={Icon}
                  button
                  key={i}
                  disabled={disabled}
                  onClick={() => {
                    setTitle(label);
                    variant === 'temporary' && onClose();
                  }}
                />
              ))}
          </List>
        </Drawer>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(SideDrawer);

function navItems(role) {
  switch (role) {
    case 'list':
      return list();
    default:
      return null;
  }
}

function list() {
  return [{ label: 'Users', Icon: WebIcon, link: '/' }];
}
