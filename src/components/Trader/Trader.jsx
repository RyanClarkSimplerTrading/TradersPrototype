import { AppBar, Grid, Tabs, Tab  } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import ChartSetups from "./ChartSetups";
import HeroBanner from "./HeroBanner";
import Overview from "./Overview";
import TraderTabs from "./TraderTabs";
import TradingPlan from "./TradingPlan";
import TradingStrategies from "./TradingStrategies";

const Trader = ({
    selectedTrader,
    membership,
}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const hasMembership = membership !== 'none';

    const handleChange = (event, newValue) => { setSelectedTab(newValue); };
    return (
        <Grid container sx={{ margin: '5rem 0 0' }}>
          <HeroBanner {...{ selectedTrader}}/> 
          {/* <TraderTabs {...{ selectedTrader, membership, selectedTab, setSelectedTab}}/>  */}
            <AppBar position="static" sx={{ placeContent: 'center '}}>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    >
                    <Tab label="Overview" />
                    { hasMembership && <Tab label="Chart Setups"/> }
                    <Tab label="Trading Plan" />
                    { hasMembership && <Tab label="Trading Strategies"/> }
                    <Tab label="Recommended Resources" />
                    <Tab label="Media Appearances" />
                    <Tab label="Trader Store" />
                </Tabs>
            </AppBar>
            <TraderTabs value={selectedTab} index={0}>
                <Overview {...{selectedTrader}}/>
            </TraderTabs>
            <TraderTabs value={selectedTab} index={hasMembership ?  1 : null}>
                <ChartSetups {...{selectedTrader}}/>
            </TraderTabs>
            <TraderTabs value={selectedTab} index={hasMembership ?  2 : 1}>
                <TradingPlan {...{selectedTrader}}/>
            </TraderTabs>
            <TraderTabs value={selectedTab} index={hasMembership ? 3 : null}>
                <TradingStrategies {...{selectedTrader}}/>
            </TraderTabs>
        </Grid>
    );
}

export default Trader;