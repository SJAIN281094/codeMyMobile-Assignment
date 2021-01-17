import React, { useState, useEffect } from 'react';
import { Components } from '../../../../utils/material-ui';
import styles from './styles';
import StyledTableCell from './StyledTableCell';
import columns from './head';
import { useStateValue } from '../../../../utils/store';
import { API_GET } from '../../../../utils/api';

const {
  withStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} = Components;

const FriendsTable = ({ classes, userId }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [, dispatch] = useStateValue();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    userId &&
      API_GET(
        `users/${userId}/friends?limit=${rowsPerPage}&skip=${
          page * rowsPerPage
        }`
      )
        .then((res) => {
          setTotalUsers(res.data.count);
          setRows(
            res.data.user.friends.map((itm) => {
              return {
                id: itm.id,
                firstName: itm?.firstName,
                lastName: itm?.lastName,
                avatar: itm?.avatar,
              };
            })
          );
        })
        .catch((err) => {
          err.status === 404
            ? dispatch({
                type: 'ALERT_OPEN',
                severity: 'error',
                isOpen: true,
                label: 'Network Error',
              })
            : dispatch({
                type: 'ALERT_OPEN',
                severity: 'error',
                isOpen: true,
                label:
                  err.data.errors[0]?.message ?? 'Oops!!, Please try again',
              });
        });
  }, [dispatch, userId, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.head}>
            <TableRow>
              {columns &&
                columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row, rwIdx) => {
                return (
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={row._id}
                    className={classes.clickable}
                  >
                    {columns &&
                      columns.map((column, idx) => {
                        const value = row[column.id] ?? '--';

                        if (column.id === 'serial') {
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {rwIdx + 1}
                            </StyledTableCell>
                          );
                        }

                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </StyledTableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={totalUsers}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default withStyles(styles)(FriendsTable);
