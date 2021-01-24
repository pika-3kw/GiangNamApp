import React from 'react';

import Container from '@material-ui/core/Container';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import MoneyOverview from '../components/MoneyOverview';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overview: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  })
);

const Money = () => {
  const classes = useStyles();
  return (
    <>
      Money
      <Container className={classes.overview} maxWidth="sm">
        <MoneyOverview />
      </Container>
    </>
  );
};

export default Money;
