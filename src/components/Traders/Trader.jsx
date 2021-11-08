import { YouTube } from "@mui/icons-material";
import { Button, CardMedia, Divider, Grid, Modal, Typography, Box, List, ListItem, Container } from "@mui/material";
import { useState } from "react";

const Trader = ({
    selectedTrader,
    membership,
}) => {
    const {name, title, quote, image, styleVideo } = selectedTrader;
    const [openVideo, setOpenVideo] = useState(false);
    const handleOpen = () => setOpenVideo(true);
    const handleClose = () => setOpenVideo(false);
    return (
        <Grid container sx={{ margin: '5rem 0 0' }}>
            <Grid container xs={12} sx={{ backgroundColor: '#E5E9F4', margin: 0 }}>
                <Grid item sm={6} xs={12}>
                    <Container sx={{ display: 'grid', justifyContent: 'end', alignContent: 'end' }}>
                        <img src={image} alt={name}/>
                    </Container>
                </Grid>
                <Grid item sm={6} xs={12}sx={{ placeSelf: 'center' }}>
                    <Container sx={{ display: 'grid', justifyContent: 'end', alignContent: 'end' }}>
                        <List>
                            <ListItem><Typography variant="h2">{name}</Typography></ListItem>
                            <ListItem><Typography variant="h4">{title}</Typography></ListItem>
                            <Divider />
                            <ListItem/>
                            <ListItem><Typography variant="subtitle2" sx={{ width: '50% '}}>"{quote}"</Typography></ListItem>
                            <ListItem/>
                            <ListItem>
                                <Button 
                                    onClick={handleOpen} 
                                    startIcon={<YouTube />} 
                                    variant="outlined"
                                    color="traderButton"
                                >
                                    My Trading Style
                                </Button>
                                <Modal
                                    open={openVideo}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box>
                                        <CardMedia
                                            component='video'
                                            image={styleVideo}
                                            autoPlay
                                            controls
                                        />
                                    </Box>
                                </Modal>
                            </ListItem>
                        </List>
                    </Container>                
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Trader;