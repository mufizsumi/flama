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
// import Img1 from '../assests/Igm1.jpg'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



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
const MainMenu = () => {
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, }}>
        <Box sx={{ display: 'flex' }}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant='h5'>Your Balance</Typography>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>RP 8,250,000</Typography>
            </Grid>
            <Grid item sx={{ ml: 'auto', display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ height: '43px', width: '45px', borderRadius: '40%', backgroundColor: '#60AEE9', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <EastOutlinedIcon sx={{ color: 'white' }} />
                </Box>
                <Typography>Transfer</Typography>
              </Box>
              <Box sx={{ ml: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ height: '43px', width: '45px', borderRadius: '40%', backgroundColor: '#CB5BE5', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <AccountBalanceWalletIcon sx={{ color: 'white' }} />
                </Box>
                <Typography>Top-Up</Typography>
              </Box>
              <Box sx={{ ml: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ height: '43px', width: '45px', borderRadius: '40%', backgroundColor: 'orange', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <ReceiptIcon sx={{ color: 'white' }} />
                </Box>
                <Typography>Bill</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <hr style={{ width: '110%', marginTop: '18px', marginLeft: '-7.3%' }} />
        <Box sx={{ mt: 2 }}>
          <Grid container sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Spending Activity</Typography>
            <Typography sx={{ marginLeft: 'auto' }}>01-09 Dec 2021</Typography>
          </Grid>
          <Box sx={{ height: 180, mt: 2, ml: -3, mb: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 40]} ticks={[0, 20, 40]} tickFormatter={tickFormatter} />
                <Tooltip />
                <Bar dataKey="pv" stackId="a" fill="purple" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
        <Typography variant='h5' sx={{ mt: 5, fontWeight: 'bold', fontSize: '30px' }}>Latest Transaction</Typography>

        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalGroceryStoreOutlinedIcon sx={{ color: 'blue' }} />
              <Typography sx={{ fontWeight: 'bold', ml: 1, fontSize: '20px' }}>Grocery</Typography>
            </Grid>
            <Grid item xs={12} md={8} container spacing={2}>
              <Grid item xs={4}>
                <Typography>Nov 17</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>mini market anugrah</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontWeight: 'bold' }}>326,800</Typography>
              </Grid>
            </Grid>
          </Grid>
          <hr style={{ width: '110%', marginTop: '20px', marginLeft: '-7.2%' }} />

          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <CameraAltOutlinedIcon sx={{ color: 'orange' }} />
              <Typography sx={{ fontWeight: 'bold', ml: 1, fontSize: '20px' }}>Equipments</Typography>
            </Grid>
            <Grid item xs={12} md={8} container spacing={2}>
              <Grid item xs={4}>
                <Typography>Nov 17</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>football game</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontWeight: 'bold' }}>326,800</Typography>
              </Grid>
            </Grid>
          </Grid>
          <hr style={{ width: '110%', marginTop: '20px', marginLeft: '-7.2%' }} />

          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <CameraRollOutlinedIcon sx={{ color: 'purple' }} />
              <Typography sx={{ fontWeight: 'bold', ml: 1, fontSize: '20px' }}>Entertainment</Typography>
            </Grid>
            <Grid item xs={12} md={8} container spacing={2}>
              <Grid item xs={4}>
                <Typography>Nov 17</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>dslr camera</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontWeight: 'bold' }}>326,800</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <hr style={{ width: '110%', marginTop: '20px', marginLeft: '-7.2%' }} />
      </Box>
    </div>
  )
}

export default MainMenu


