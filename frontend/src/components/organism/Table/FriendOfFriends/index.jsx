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
  TableRow,
} = Components;

const FriendOfFriends = ({ classes, userId }) => {
  const [, dispatch] = useStateValue();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    userId &&
      API_GET(`users/${userId}/friend-of-friends`)
        .then((res) => {
          setRows(
            res.data.user.friends.map((itm) => {
              return {
                id: itm.id,
                firstName: itm?.firstName,
                lastName: itm?.lastName,
                avatar: itm?.avatar,
                friends: itm?.friends,
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
  }, [dispatch, userId]);

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

                        if (column.id === 'fullName') {
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {row.firstName} {row.lastName}
                            </StyledTableCell>
                          );
                        }

                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            <ul>
                              {value?.map((friend) => {
                                return (
                                  <li>
                                    {friend.firstName} {friend.lastName}
                                  </li>
                                );
                              })}
                            </ul>
                          </StyledTableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default withStyles(styles)(FriendOfFriends);
