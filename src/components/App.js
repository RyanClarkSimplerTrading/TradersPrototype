import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState } from 'react';
import traderMock from '../mock/traders';
import DashBoard from './DashBoard';
import NavBar from './NavBar';
import Trader from './Trader/Trader';
import Traders from './Traders/Traders';

const  App = () => {
  const [membership, setMembership ] = useState('none')
  const [traders, setTraders] = useState(traderMock);
  const [isDashboardOpen, setIsDashboardOpen ] = useState(false);
  const [isTrader, setIsTrader] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState({});
  const primaryBG = membership === 'none' ? '#FFFFFF' : '#F4F4F4';
  const secondaryBG = membership === 'none' ? '#F4F4F4' : '#FFFFFF';

  const handleDashboard = () => { setIsDashboardOpen(!isDashboardOpen)}

  return (
    <div style={{ backgroundColor: primaryBG }}>
      <NavBar {...{ handleDashboard, setIsTrader }}/>
      <DashBoard {...{ handleDashboard, isDashboardOpen, setMembership, membership }} />
      {!isTrader && <div className="App"><Traders {...{ traders, membership, primaryBG, secondaryBG, setIsTrader, setSelectedTrader }} /></div>}
      {isTrader && <Trader {...{ selectedTrader, membership }} />}
    </div>
  );
}

export default App;

