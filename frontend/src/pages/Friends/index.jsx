import React, { useEffect, useState } from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
import FriendsTable from '../../components/organism/Table/FriendsTable';
import FriendOfFriends from '../../components/organism/Table/FriendOfFriends';
import { useLocation, useHistory } from 'react-router-dom';

const { withStyles, Grid, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Friends = ({ classes }) => {
  const location = useLocation();
  const history = useHistory();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (!location?.state?.id) {
      history.push('/');
    } else {
      setUserId(location.state.id);
    }
  }, [history, location]);

  return (
    <>
      <Container direction={'column'} className={classes.newsPage}>
        <Item>
          <Container className={classes.sectionHeading}>
            <Item>
              <Typography className="heading">Friends</Typography>
            </Item>
          </Container>
        </Item>
        <Item></Item>
        <Item className={classes.tableWrapper}>
          <Container className={classes.sectionTable}>
            <Item className={classes.tabWrapper}>
              <FriendsTable userId={userId} />
              <Container className={classes.sectionHeading}>
                <Item>
                  <Typography className="heading">Friend Of Friends</Typography>
                </Item>
              </Container>
              <FriendOfFriends userId={userId} />
            </Item>
          </Container>
        </Item>
      </Container>
    </>
  );
};

export default withStyles(styles)(Friends);
