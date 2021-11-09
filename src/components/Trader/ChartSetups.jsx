import { List, ListItemText, Collapse, Grid, ListItem, ListItemIcon, Typography } from "@mui/material";
import { useState } from "react";
import { Add , ArrowForward, ArrowDownward } from "@mui/icons-material";

const ChartSetups = ({
    selectedTrader: { chartSetups }
}) => {
    const arrayOfFalse = new Array(chartSetups.length).fill(false)
    const [list, setList] = useState(arrayOfFalse)

    const updateList = (index) => {
        let newList = [...list]
        newList[index] = !list[index]
        setList(newList);
    }
    return (
        <List sx={{ padding: "0 10rem 0"}}>
            {chartSetups.map((strat, index )=> {
                return (
                    <ListItem button onClick={() => updateList(index)}>
                        <ListItemIcon>
                            <Add/>
                        </ListItemIcon>
                        <ListItemText> {strat.name}</ListItemText>
                        <Collapse in={list[index]} sx={{ width: "50%"}}>
                            <Grid container spacing={1} justifyContent="center" alignContent="center">
                                {strat.images.map(img => {
                                    return <img src={img}/>
                                })}
                                <Grid item xs={6}>
                                    <Typography variant="body2">description:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="body2">{strat.discription}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">Use:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="body2">{strat.use}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">link:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="body2">{strat.link}</Typography>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default ChartSetups;