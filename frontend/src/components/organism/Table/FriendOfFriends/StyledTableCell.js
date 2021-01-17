import { Components } from '../../../../utils/material-ui';

const { withStyles, TableCell } = Components;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default StyledTableCell;
