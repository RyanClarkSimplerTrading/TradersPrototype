import { Public, Twitter, YouTube } from "@mui/icons-material";
import { Grid, List, ListItem, ListItemButton, Paper, Typography, Card, CardContent, CardActions, Button } from "@mui/material";

const Overview = ({
    selectedTrader,
}) => {
    const { name, socialMedia, overview } = selectedTrader;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Paper sx={{ padding: '10rem' }}>
                    <Typography variant="h3" sx={{ marginBottom: '5rem' }}> Who is {name}?</Typography>
                    <Typography variant="body1"> {overview} </Typography>
                </Paper>
            </Grid>
            <Grid sm={3}>
                <List sx={{ paddingTop: '5rem'}}> 
                    {new Array(20).fill(1).map(() => {
                        return (
                            <ListItem>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Blog of the Day
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Can Spiders Do Stocks
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Options
                                        </Typography>
                                        <Typography variant="body2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Massa eget egestas purus viverra accumsan in nisl nisi. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Eu feugiat pretium nibh ipsum. Diam quam nulla porttitor massa id neque. Pharetra convallis posuere morbi leo urna molestie. Placerat in egestas erat imperdiet sed euismod nisi. Laoreet id donec ultrices tincidunt arcu non sodales neque. Tempus imperdiet nulla malesuada pellentesque elit. Duis at consectetur lorem donec massa sapien faucibus et molestie. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Iaculis at erat pellentesque adipiscing commodo. Sed sed risus pretium quam vulputate dignissim suspendisse in. Arcu odio ut sem nulla.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Grid sm={1}>
                <List sx={{ paddingTop: '5rem'}}>
                    {socialMedia.map(media => {
                        const { name, link } = media;
                        if (name === 'YouTube') return <ListItemButton><YouTube button href={link} fontSize="large"/></ListItemButton>
                        if (name === 'Twitter') return <ListItem><Twitter href={link} fontSize="large"/></ListItem>
                        return <ListItem><Public href={link} fontSize="large"/></ListItem>
                    })}
                </List>
            </Grid>
        </Grid>
    )
}

export default Overview;