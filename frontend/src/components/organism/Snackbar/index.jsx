import React, { useEffect } from 'react';
import { Components } from '../../../utils/material-ui';
import { useStateValue } from '../../../utils/store';

const { Snackbar, MuiAlert, withStyles } = Components;

const styles = (theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    zIndex: theme.zIndex.snackbar,
  },
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const AlertBox = ({ classes }) => {
  const [{ alert }, dispatch] = useStateValue();
  const { severity, isOpen, label } = alert;

  const [state] = React.useState({
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal } = state;

  const handleClose = () => {
    dispatch({
      type: 'ALERT_CLOSE',
      isOpen: false,
    });
  };

  useEffect(() => {
    if (isOpen === true) {
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Snackbar
      className={classes.root}
      anchorOrigin={{ vertical, horizontal }}
      open={isOpen}
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity={severity}>
        {label}
      </Alert>
    </Snackbar>
  );
};

export default withStyles(styles)(AlertBox);
