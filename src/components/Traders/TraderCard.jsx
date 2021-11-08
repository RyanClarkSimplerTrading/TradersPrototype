import { Avatar, Button, Card, CardActionArea, CardActions, Collapse, Grid, Typography } from "@mui/material";
import OptionsTable from "./OptionsTable";

const TraderCard = ({
    trader,
    membership,
    primaryBG,
    secondaryBG,
    setIsTrader, setSelectedTrader,
}) => {
    const { name, title, description, image, memberships } = trader;
    const isOption = membership === 'options'
    const isSimplerDayTrading = membership === 'simplerDayTrading'
    if (isOption && !memberships.options) return null;
    if ( isSimplerDayTrading && !memberships.simplerDayTrading ) return null;

    return <Grid
    item xs={12} sm={12} md={6} lg={4} xl={4} xxl={1}
    >
      <Card style={{ backgroundColor: secondaryBG, height: '100%', width:'100%', alignSelf: 'stretch'  }}>
        <CardActionArea onClick={() => { setSelectedTrader(trader); setIsTrader(true)}}>
          <Avatar src={image} alt={name} sx={{ width: 200, height: 200, margin: 'auto', marginBottom: 1, marginTop: 3, background: primaryBG }}/>
          <Typography align='center' variant='h5' style={{ height: 50 }}>{name}</Typography>
          <Typography align='center' variant='subtitle2' style={{ height: 50 }}>{title}</Typography>
          <Typography align='center' variant='body1' style={{ height: 150, padding: '0 1em 0' }}>{description}</Typography>
          <Collapse in={isOption}> { memberships.options && OptionsTable(memberships.options)} </Collapse>
        </CardActionArea>
        <CardActions style={{justifyContent: 'center', alignSelf: 'center', marginBottom: 5 }}>
          <Button variant="contained" color="traderButton" onClick={() => { setSelectedTrader(trader); setIsTrader(true)}}>LEARN MORE</Button>
        </CardActions>
      </Card>
    </Grid>
}

export default TraderCard;