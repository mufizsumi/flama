import React, { useState } from 'react';
import { Typography, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  East as EastOutlinedIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  MonetizationOnOutlined as MonetizationOnOutlinedIcon,
  Receipt as ReceiptIcon,
  SwapVert as SwapVertIcon,
  EarbudsOutlined as EarbudsOutlinedIcon,
  BarChart as BarChartIcon,
  HelpOutline as HelpOutlineIcon,
  Settings as SettingsIcon,
  LocalGroceryStoreOutlined as LocalGroceryStoreOutlinedIcon,
  CameraAltOutlined as CameraAltOutlinedIcon,
  CameraRollOutlined as CameraRollOutlinedIcon,
} from '@mui/icons-material';
import Img1 from '../assests/Igm1.jpg'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import MainMenu from '../components/mainMune';
import Dashboard from './Dashboard';
import Main from '../components/main';

const drawerWidth = 270;
const data = [
  { name: '01', uv: 5, pv: 10, amt: 10 },
  { name: '02', uv: 10, pv: 15, amt: 15 },
  { name: '03', uv: 15, pv: 20, amt: 20 },
  { name: '04', uv: 20, pv: 25, amt: 25 },
  { name: '05', uv: 25, pv: 30, amt: 30 },
  { name: '06', uv: 30, pv: 35, amt: 35 },
  { name: '07', uv: 5, pv: 10, amt: 10 },
  { name: '08', uv: 10, pv: 15, amt: 15 },
  { name: '09', uv: 15, pv: 20, amt: 20 },
  { name: '10', uv: 20, pv: 25, amt: 25 },
  { name: '11', uv: 25, pv: 30, amt: 30 },
  { name: '12', uv: 15, pv: 20, amt: 20 },
];

const tickFormatter = (value) => {
  if (value === 0) return 0;
  if (value === 20) return 20;
  if (value === 40) return 40;
  return '';
};

const Menu = () => {
  const [Name, setName] = useState('Menu');
  const handleClick = (name) => {
    setName(name)
    console.log(Name);
  }
  return (
    <Box style={{ display: 'flex' }}>
      <Box>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
          variant="permanent"
          anchor="left"
          PaperProps={{ elevation: 8 }}
        >
          <Box sx={{ ml: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px 0' }}>
            <img src={Img1} alt="Profile" style={{ width: '30px', height: '32px', borderRadius: '50%' }} />
            <Typography variant="body1" sx={{ ml: 1, fontWeight: 'bold' }}>Sam@gmail.com</Typography>
            <SettingsIcon sx={{ ml: 4, color: 'orange' }} />
          </Box>
          <Typography variant='h5' sx={{ ml: 4, mt: 2, fontWeight: 'bold' }}>Menu</Typography>
          <List sx={{ ml: 2 }}>
            {[
              { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'orange' }} /> },
              { text: 'Send Money', icon: <EastOutlinedIcon sx={{ color: 'orange' }} /> },
              { text: 'Top-up Wallet', icon: <AccountBalanceWalletIcon sx={{ color: 'orange' }} /> },
              { text: 'Withdraw', icon: <MonetizationOnOutlinedIcon sx={{ color: 'orange' }} /> },
              { text: 'Bill Payment', icon: <ReceiptIcon sx={{ color: 'orange' }} /> },
            ].map((item) => (
              <ListItem button key={item.text} onClick={() => handleClick(item.text)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}

            <Typography variant='h5' sx={{ m: 3, fontWeight: 'bold' }}>
              Other menu
            </Typography>

            {[
              { text: 'History', icon: <SwapVertIcon sx={{ color: 'orange', width: '30px', height: '30px' }} /> },
              { text: 'Transaction Request', icon: <EarbudsOutlinedIcon sx={{ color: 'orange' }} /> },
              { text: 'Statistics', icon: <BarChartIcon sx={{ color: 'orange' }} /> },
              { text: 'Help', icon: <HelpOutlineIcon sx={{ color: 'orange' }} /> },
            ].map((item) => (
              <ListItem button key={item.text}onClick={() => handleClick(item.text)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 3 }}>
        {Name ==='Menu' && <MainMenu/>}
        {Name ==='Dashboard' && <Main/>}
        {Name ==='Send Money' && <h1>Send Money</h1>}
        {Name ==='Top-up Wallet' && <h1>Top-up Wallet</h1>}
        {Name ==='Withdraw' && <h1>Withdraw</h1>}
        {Name ==='Bill Payment' && <h1>Bill Payment</h1>}
        {Name ==='History' && <h1>History</h1>}
        {Name ==='Transaction Request' && <h1>Transaction Request</h1>}
        {Name ==='Statistics' && <h1>Statistics</h1>}
      </Box>
    </Box>
  );
}

export default Menu;
