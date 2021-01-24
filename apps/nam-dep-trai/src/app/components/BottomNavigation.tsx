import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Schedule"
        icon={<ScheduleIcon />}
        component={Link}
        to="/schedule"
      />
      <BottomNavigationAction
        label="Money"
        icon={<PaymentIcon />}
        component={Link}
        to="/money"
      />
    </BottomNavigation>
  );
}
