const styles = (theme) => {
  return {
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    actionBtn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(1, 2),
      '& a': {
        textDecoration: 'none',
        color: theme.palette.common.white,
      },
    },
    avatar: {
      width: '80px',
    },
    clickable: {
      cursor: 'pointer',
    },
  };
};

export default styles;
