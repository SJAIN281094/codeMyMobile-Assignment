const styles = (theme) => {
  return {
    newsPage: {
      backgroundColor: theme.palette.common.gray98,
      padding: theme.spacing(5),
    },
    paper: {
      padding: theme.spacing(5, 8, 6, 8),
      [theme.breakpoints.up('sm')]: {
        minWidth: '520px',
      },
      borderRadius: '20px',
    },
    sectionHeading: {
      justifyContent: 'space-between',
      padding: theme.spacing(1, 0),
      '& .heading': {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize * 2.2,
        letterSpacing: 1,
      },
      '& .brdcstBtn': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(1, 2),
      },
      '& .brdcstBtn a': {
        textDecoration: 'none',
        color: theme.palette.common.white,
      },
    },
    sectionDate: {
      padding: theme.spacing(1, 0),
      alignItems: 'flex-end',
    },
    datePicker: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 180,
    },
    sectionTable: {
      padding: theme.spacing(1, 0),
    },
    tabWrapper: {
      maxWidth: '100%',
      width: '100%',
    },
    tableWrapper: {
      maxWidth: '100%',
    },
  };
};

export default styles;
