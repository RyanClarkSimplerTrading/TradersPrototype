import { DeveloperBoard } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Stack, Divider, Grid, Avatar, Typography, Collapse, MenuList, MenuItem, FormControl } from "@mui/material";
import { useState } from "react";
import Ryan from '../images/ryan.jpg';

const DashBoard = ({
    isDashboardOpen,
    handleDashboard,
    setMembership,
    membership,
}) => {
    const [isMembershipsOpen, setIsMembershipOpen] = useState(false)
    const updateMembership = (value) => {
        handleDashboard();
        setMembership(value);
    }
    return (
        <Drawer
            anchor="right"
            open={isDashboardOpen}
            onClose={handleDashboard}
            sx={{ width: 250 }}
        >
            <Stack spacing={2} divider={<Divider flexItem />}>
                <Grid container spacing={2} justifyContent="center" alignContent="center" alignSelf="center"  sx={{ maxWidth: 280 }}> 
                    <Grid item xs={12} sx={{ marginTop: 2 }}> <Avatar src={Ryan} alt="Ryan" sx={{ width: 100, height: 100, margin: 'auto', }}/> </Grid>
                    <Grid item xs={12}> <Typography align='center'> Ryan Clark </Typography> </Grid>
                    <Grid item xs={12}> <Typography align='center'> ryan.clark@simplertrading.com </Typography> </Grid>
                    <Grid item xs={12}> <Typography align='center'> 210-294-1400 </Typography> </Grid>
                    <Grid item xs={8}> <Typography align='center'> Selected Membership </Typography> </Grid>
                    <Grid item xs={1}> <Divider orientation="vertical"/> </Grid>
                    <Grid item xs={3}> <Typography align='center'> {membership.charAt(0).toUpperCase() + membership.slice(1)} </Typography> </Grid>
                </Grid>
                <List>
                    <ListItem button onClick={() => setIsMembershipOpen(!isMembershipsOpen)}>
                        <ListItemIcon>
                            <DeveloperBoard/>
                        </ListItemIcon>
                        <ListItemText> MemberShip Selector </ListItemText>
                        <Collapse in={isMembershipsOpen}>
                            <FormControl>
                                <MenuList>
                                    <MenuItem onClick={() => updateMembership('none')}>None</MenuItem>
                                    <MenuItem onClick={() => updateMembership('options')}>Options</MenuItem>
                                    <MenuItem onClick={() => updateMembership('simplerDayTrading')}>Simpler Day Trading</MenuItem>
                                </MenuList>
                            </FormControl>
                        </Collapse>
                    </ListItem>
                </List>
            </Stack>
        </Drawer>
    );
}

export default DashBoard;