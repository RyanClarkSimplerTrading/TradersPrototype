import { List, ListItemText, Collapse, Grid, ListItem, ListItemIcon, Typography } from "@mui/material";
import { useState } from "react";
import { Add , ArrowForward, ArrowDownward } from "@mui/icons-material";

const TradingStrategies = ({
    selectedTrader: { tradingStrategies }
}) => {
    const arrayOfFalse = new Array(tradingStrategies.length).fill(false)
    const [list, setList] = useState(arrayOfFalse)

    const updateList = (index) => {
        let newList = [...list]
        newList[index] = !list[index]
        setList(newList);
    }
    return (
        <List sx={{ padding: "0 10rem 0"}}>
            {tradingStrategies.map((strat, index )=> {
                return (
                    <ListItem button onClick={() => updateList(index)}>
                        <ListItemIcon>
                            <Add/>
                        </ListItemIcon>
                        <ListItemText> {strat.name}</ListItemText>
                        <Collapse in={list[index]} sx={{ width: "50%"}}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}> Type: </Grid>
                                <Grid item xs={6}> {strat.type} </Grid>
                                <Grid item xs={6}> Filters: </Grid>
                                <Grid item xs={6}> {strat.filters} </Grid>
                                <Grid item xs={6}> Entry Rules: </Grid>
                                <Grid item xs={6}> {strat.entryRules.map(rule => {
                                    return (
                                        <Typography variant="body2">{rule}</Typography>
                                    );
                                })} </Grid>
                                <Grid item xs={6}> Indicators: </Grid>
                                <Grid item xs={6}> {strat.indicators.map(rule => {
                                    return (
                                        <Typography variant="body2">{rule}</Typography>
                                    );
                                })} </Grid>
                                <Grid item xs={6}> Timeframes: </Grid>
                                <Grid item xs={6}> {strat.timeFrames.map(rule => {
                                    return (
                                        <Typography variant="body2">{rule}</Typography>
                                    );
                                })} </Grid>
                                 <Grid item xs={6}> How I manage: </Grid>
                                <Grid item xs={6}> {strat.management} </Grid>
                                <Grid item xs={6}> My Exits: </Grid>
                                <Grid item xs={6}> {strat.exits} </Grid>
                               
                            </Grid>
                        </Collapse>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default TradingStrategies;