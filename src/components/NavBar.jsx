import { Toolbar, AppBar, Button, Box } from "@mui/material"
import Logo from '../images/simplerLogo.png'

const NavBar = ({
    handleDashboard,
}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar spacing={5}> 
                    <div className="nav-button" id="logo"> <img src={Logo} alt="Simpler Trading" style={{ height: '2rem'}}/> </div>
                    <Button color="inherit"> MEMBERSHIPS </Button>
                    <Button color="inherit"> STORE </Button>
                    <Button color="inherit"> TRADERS </Button>
                    <Button color="inherit"> FREE GOODS </Button>
                    <Button color="inherit" onClick={handleDashboard}> DASHBOARD </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;