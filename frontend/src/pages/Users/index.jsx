import React from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
import UserTable from '../../components/organism/Table/UserTable';

const { withStyles, Grid, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Users = ({ classes }) => {
  return (
    <>
      <Container direction={'column'} className={classes.newsPage}>
        <Item>
          <Container className={classes.sectionHeading}>
            <Item>
              <Typography className="heading">Users</Typography>
            </Item>
          </Container>
        </Item>
        <Item></Item>
        <Item className={classes.tableWrapper}>
          <Container className={classes.sectionTable}>
            <Item className={classes.tabWrapper}>
              <UserTable />
            </Item>
          </Container>
        </Item>
      </Container>
    </>
  );
};

export default withStyles(styles)(Users);
