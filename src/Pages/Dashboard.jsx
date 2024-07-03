import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Grid, Button, Box, Card, CardContent, Paper} from '@mui/material';
import { Dashboard as DashboardIcon, BarChart as BarChartIcon, CreditCard as CreditCardIcon, Person as PersonIcon, Settings as SettingsIcon, AccountBalanceWallet as AccountBalanceWalletIcon, Logout as LogoutIcon, Search as SearchIcon, JoinFull as JoinFullIcon, Apple as AppleIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import Adidas from '../assests/Adidas.png';
import Rebok from '../assests/Rebok.png';
import Jordon from '../assests/Jordon.png';
import DiamondIcon from '@mui/icons-material/Diamond';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Main from '../components/main';
import { useState } from 'react';
import Logo from '../assests/logo.png';

const Dashboard = () => {
  const [Name ,setName]=useState("Dashboard")
  const handleClick=(name)=>{
    setName(name)
  }
  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ zIndex: 1400, backgroundColor: 'purple' }}>
        <Toolbar>
          <img src={Logo} alt='logo.png' style={{width:'8%', background:'white'}}/>
          <Box style={{ flex: 1, marginLeft: '13%', marginRight: 'auto', maxWidth: '600px' }}>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{ pl: '15px',  flex: 1, background: 'white', borderRadius: '5px', width: '100%' }}
              endAdornment={
                <IconButton type="submit" sx={{ pr: '15px', background: 'white' }} aria-label="search">
                  <SearchIcon style={{ color: 'purple' }} />
                </IconButton>}/>
          </Box>
          <Box>
            <Button variant="contained" sx={{ background: 'white', color: 'black' }}>Admin</Button>
            <IconButton color="inherit" >
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ width: 300 }}
        variant="permanent"
        anchor="left"
        PaperProps={{ elevation: 8 }}
      >
        <List style={{ marginTop: '75px' }}>
          {[
            { text: 'Transaction', icon: <AccountBalanceWalletIcon /> },
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'Statistic', icon: <BarChartIcon /> },
            { text: 'Card', icon: <CreditCardIcon /> },
            { text: 'Profile', icon: <PersonIcon /> },
            { text: 'Settings', icon: <SettingsIcon /> }
          ].map((item) => (
            <ListItem button key={item.text} onClick={()=>handleClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto', mb: 2, textAlign: 'center' }}>
          <Button
            href='/'
            variant="contained"
            sx={{
              background: 'orange',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'orange',
              },
              '&:active': {
                backgroundColor: 'orange',
              },
            }}
          >
            <LogoutIcon sx={{ transform: 'rotateY(180deg)', mr: 1 }} /> Login
          </Button>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 5, ml: -17,  }}>
       {Name ==="Dashboard" && <Main/>}
       {Name ==="Transaction" && <h1>
       Transaction</h1>}
       {Name ==="Statistic" && <h1>
       Statistic</h1>}
       {Name ==="Card" && <h1>
       Card</h1>}
       {Name ==="Profile" && <h1>
       Profile</h1>}
       {Name ==="Settings" && <h1>
       Setting</h1>}
      </Box>

      <Paper elevation={8} square={false} variant="elevation" sx={{ mr: -0.95, mb: -2, width: 310, height:'auto' }}>
        <Grid container>
          <Typography variant='h6' sx={{
            width: '100%',
            overflowX: 'hidden',
            marginTop: '70px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center', fontWeight: 'bold'
          }}>Upcoming Payments</Typography>
        </Grid>
        <Grid container spacing={2} sx={{ mt: -3 }}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{ ml: 2, width: '90%', height: 'auto', marginTop: '45px', display: 'flex', flexDirection: 'column', textAlign: 'center', }} variant="permanent" anchor="right"
            >
              <Card sx={{ p: '8px', minWidth: 50, elevation: 8 }}>
                <CardContent>
                  <Typography>
                    <DiamondIcon sx={{ fontSize: '35px', color: 'orange' }} />
                  </Typography>
                  <Typography>Sktech</Typography>
                  <Typography sx={{ fontSize: '15px', ml: -1 }}>Subscrribe</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>$14,50</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{ width: '90%', height: 'auto', marginTop: '45px', display: 'flex', flexDirection: 'column', textAlign: 'center', }} variant="permanent" anchor="right"
            >
              <Card sx={{ p: '8px', minWidth: 50, elevation: 8 }}>
                <CardContent>
                  <Typography>
                    <CurrencyRubleIcon sx={{ fontSize: '35px', }} />
                  </Typography>
                  <Typography>Paypal</Typography>
                  <Typography sx={{ fontSize: '15px', }}>Send</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>$20,50</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Typography variant='h6' sx={{
            width: '100%',
            overflowX: 'hidden',
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center', fontWeight: 'bold'
          }}>Daily Transaction</Typography>
        </Grid>
        <Box>
          <Grid sx={{ display: 'flex', gap: 3, ml: 2, mt: 2 }}>
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Items</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Payment</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Review</Typography>
          </Grid>
          <hr style={{ width: '90%' }} />
          <Grid>
            <Typography sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <img src={Adidas} alt='adidas' style={{ width: '15%', height: '8%', marginLeft: "5%" }} />
              <Typography sx={{ mt: 1 }}>Adidas Store</Typography>
              <Typography sx={{ mt: 1 }}>1 Item</Typography>
            </Typography>

            <Typography sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <AppleIcon sx={{ width: '13%', height: '6%', marginLeft: "6%" }} />
              <Typography sx={{ mt: 1 }}>Apple Store</Typography>
              <Typography sx={{ mt: 1, ml: 1.3 }}>2 Item</Typography>
            </Typography>

            <Typography sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <img src={Rebok} alt='rebok' style={{ width: '15%', height: '8%', marginLeft: "5%", marginTop: '3%' }} />
              <Typography sx={{ mt: 1 }}>Rebok</Typography>
              <Typography sx={{ mt: 1, ml: 5.7 }}>3 Item</Typography>
            </Typography>

            <Typography sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <img src={Jordon} alt='jordon' style={{ width: '16%', height: '9%', marginLeft: "5%", marginTop: '2%' }} />
              <Typography sx={{ mt: 1 }}>Jordon</Typography>
              <Typography sx={{ mt: 1, ml: 5.2 }}>4 Item</Typography>
            </Typography>
          </Grid>
        </Box>

      </Paper>


    </div>
  );
};

export default Dashboard;
