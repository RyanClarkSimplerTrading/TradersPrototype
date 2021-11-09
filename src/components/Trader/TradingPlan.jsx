import { Drawer, List, ListItem, ListItemIcon, ListItemText, Stack, Divider, Grid, Avatar, Typography, Collapse, MenuList, MenuItem, FormControl, ListItemButton } from "@mui/material";
import { Add , ArrowForward, ArrowDownward } from "@mui/icons-material";
import { useState } from "react";

const defaultList = {
    why: false,
    goals: false,
    objectives: false,
    markets: false,
    timeFrames: false,
    setups: false,
    entry: false,
    exit: false
}

const TradingPlan = ({
    selectedTrader,
}) => {
    const { tradingPlan } = selectedTrader;
    const [ list, setList] = useState(defaultList)
    const [open, setOpen] = useState(false)
    if(!tradingPlan) return <h1> No Trading Plan Yet</h1>

    const onChange = (selected) => {
        setOpen(true)
        setList({ ...list, ...{ [selected]: !list[selected] }})
    }
    return (
        <h1>
            <List sx={{ padding: "0 10rem 0"}}>
                <ListItem button onClick={() => onChange('why')}>
                    <ListItemIcon xs={6}>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> Why am I trading? </ListItemText>
                    <Collapse in={list.why} sx={{ width: "50%"}}>
                        <List>
                        {tradingPlan.why.map(item => {
                            return (
                                <>
                                    <ListItemIcon> </ListItemIcon>
                                    <ListItemText variant="subtitle2" >{item}</ListItemText>
                                </>
                            )
                        })}
                        </List>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('goals')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> What are my goals? </ListItemText>
                    <Collapse in={list.goals} sx={{ width: "50%"}}>
                        <Typography variant="body2">{tradingPlan.goals}</Typography>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('objectives')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> What are my objectives? </ListItemText>
                    <Collapse in={list.objectives} sx={{ width: "50%"}}>
                        <Typography variant="body2">{tradingPlan.objectives}</Typography>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('markets')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> What markets do I trade? </ListItemText>
                    <Collapse in={list.markets} sx={{ width: "50%"}}>
                        <Typography variant="body2">{tradingPlan.markets}</Typography>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('timeFrames')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> What timeframes will I trade? </ListItemText>
                    <Collapse in={list.timeFrames} sx={{ width: "50%"}}>
                        <Typography variant="body2">{tradingPlan.timeFrames}</Typography>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('setups')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> What Setups will I trade? </ListItemText>
                    <Collapse in={list.setups} sx={{ width: "50%"}}>
                        <Typography variant="body2">{tradingPlan.setups}</Typography>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('entry')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> Entry Rules </ListItemText>
                    <Collapse in={list.entry} sx={{ width: "50%"}}>
                    <List>
                        {tradingPlan.entryRules.map(item => {
                            return (
                                <>
                                    <ListItemIcon> </ListItemIcon>
                                    <ListItemText variant="subtitle2" >{item}</ListItemText>
                                </>
                            )
                        })}
                        </List>
                    </Collapse>
                </ListItem>
                <ListItem button onClick={() => onChange('exit')}>
                    <ListItemIcon>
                        <Add/>
                    </ListItemIcon>
                    <ListItemText> Exit Rules </ListItemText>
                    <Collapse in={list.exit} sx={{ width: "50%"}}>
                    <List>
                        {tradingPlan.exitRules.map(item => {
                            return (
                                <>
                                    <ListItemIcon> </ListItemIcon>
                                    <ListItemText variant="subtitle2" >{item}</ListItemText>
                                </>
                            )
                        })}
                        </List>
                    </Collapse>
                </ListItem>
            </List>
        </h1>
    )
}

export default TradingPlan;