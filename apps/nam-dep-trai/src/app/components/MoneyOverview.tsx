import React from 'react';
import moment, { Moment } from 'moment';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(1),
      width: '100%',
      padding: theme.spacing(2),
    },

    title: {
      fontSize: 14,
    },
    money: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  })
);

type MoneyStaticalProps = {
  title?: string;
  startDate?: Moment;
  endDate?: Moment;
  money: number;
};

const MoneyStatical = (props: MoneyStaticalProps) => {
  const classes = useStyles();

  const { title = 'Ngày hôm nay', startDate, endDate, money } = props;
  let date: string = moment().format('L');
  if (startDate && endDate) {
    date = `${startDate.format('L')} - ${endDate.format('L')}`;
  }
  const value = new Intl.NumberFormat('vi-VN').format(money);

  return (
    <>
      <Typography color="primary" variant="subtitle1">
        {title}
      </Typography>
      <Typography variant="body2">{date}</Typography>
      <Typography color="secondary" className={classes.money}>
        {value}
      </Typography>
    </>
  );
};

const MoneyOverview = () => {
  const classes = useStyles();
  const now: Moment = moment();

  return (
    <Paper className={classes.paper}>
      <MoneyStatical money={100000} />
      <Divider />
      <MoneyStatical
        money={1000000}
        title="Tuần này"
        startDate={moment().startOf('week')}
        endDate={now}
      />
      <Divider />
      <MoneyStatical
        money={10000000}
        title="Tháng này"
        startDate={moment().startOf('month')}
        endDate={now}
      />
    </Paper>
  );
};

export default MoneyOverview;
