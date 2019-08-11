import React from 'react';
import { useMatches } from '../../hooks/api/useMatches';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Matches = () => {
  const matches = useMatches([]);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Red Team</TableCell>
            <TableCell align='center'>Red Score</TableCell>
            <TableCell align='center'>Blue Team</TableCell>
            <TableCell align='right'>Blue Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map(match => (
            <TableRow key={match.id}>
              <TableCell align='left'>{`${match.redTeam.player1} ${match.redTeam.player2}`}</TableCell>
              <TableCell align='center'>{match.redTeam.score}</TableCell>
              <TableCell align='center'>{match.blueTeam.score}</TableCell>
              <TableCell align='right'>{`${match.blueTeam.player1} ${match.blueTeam.player2}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Matches;
