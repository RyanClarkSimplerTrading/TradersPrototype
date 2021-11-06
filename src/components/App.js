import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import traderMock from '../mock/traders';
import DashBoard from './DashBoard';
import NavBar from './NavBar';
import TraderCard from './TraderCard';

const  App = () => {
  const [membership, setMembership ] = useState('none')
  const [traders, setTraders] = useState(traderMock);
  const [isDashboardOpen, setIsDashboardOpen ] = useState(false);
  const primaryBG = membership === 'none' ? '#FFFFFF' : '#F4F4F4';
  const secondaryBG = membership === 'none' ? '#F4F4F4' : '#FFFFFF';

  const handleDashboard = () => { setIsDashboardOpen(!isDashboardOpen)}

  return (<div style={{ backgroundColor: primaryBG }}>
      <NavBar {...{ handleDashboard }}/>
      <DashBoard {...{ handleDashboard, isDashboardOpen, setMembership, membership }} />
      <div className="App">
        <Grid container spacing={2} justifyContent="center" alignContent="start">
          {traders.map(trader => { return <TraderCard {...{ trader, membership, primaryBG, secondaryBG }} /> })}
        </Grid>
      </div>
    </div>
  );
}

export default App;

