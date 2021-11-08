import { Grid } from '@mui/material';
import TraderCard from './TraderCard';


const Traders = ({
    traders,
    membership,
    primaryBG,
    secondaryBG,
    setIsTrader, setSelectedTrader
}) => {

    return (
        <Grid container spacing={2} justifyContent="center" alignContent="start">
          {traders.map(trader => { return <TraderCard {...{ trader, membership, primaryBG, secondaryBG, setIsTrader, setSelectedTrader }} /> })}
        </Grid>
    )
};

export default Traders;