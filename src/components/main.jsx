import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, } from 'recharts';
import { LineChart, Line, YAxis } from 'recharts';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Netflix from '../assests/Netflix.png';
import Adidas from '../assests/Adidas.png';

import Spotify from '../assests/Spotify.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
    Dashboard as DashboardIcon, BarChart as BarChartIcon, CreditCard as CreditCardIcon, Person as PersonIcon, Settings as SettingsIcon, AccountBalanceWallet as AccountBalanceWalletIcon, Logout as LogoutIcon, Search as SearchIcon, JoinFull as JoinFullIcon, Apple as AppleIcon,
  } from '@mui/icons-material';
  import {
    AppBar, Toolbar, Typography, InputBase, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Grid, Button, Box, Card, CardContent,
    Paper
  } from '@mui/material';
  const data = [
    {
      name: '60%',
      uv: 2015,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '90%',
      uv: 4000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '80%',
      uv: 3490,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '20%',
      uv: 1015,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '70%',
      uv: 2780,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '60%',
      uv: 2015,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '80%',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const Main = () => {
    
  return (
    <div>
       <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>My Card</Typography>
            <Card sx={{ display: 'flex', background: '#800000', color: 'white', mb: 2 }}>
              <CardContent>
                <Typography component="h2" sx={{ fontWeight: 'bold' }}>Your balance</Typography>
                <Typography variant='h5' component="h2" sx={{ fontWeight: 'bold' }}>$253,540</Typography>
                <Typography component="h2" sx={{ fontWeight: 'bold', mt: 1 }}>****0592</Typography>
                <Typography component="h2" sx={{ fontWeight: 'bold' }}>10/23</Typography>
              </CardContent>
              <CardContent sx={{ ml: 'auto', mt: 'auto', fontWeight: 'bold' }}>VISA</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 46 }}>Debit</Typography>
            <Card sx={{ display: 'flex', background: 'purple', color: 'white' }}>
              <CardContent>
                <Typography component="h2" sx={{ fontWeight: 'bold' }}>Your balance</Typography>
                <Typography variant='h5' component="h2" sx={{ fontWeight: 'bold' }}>$253,540</Typography>
                <Typography component="h2" sx={{ fontWeight: 'bold', mt: 1 }}>****0592</Typography>
                <Typography component="h2" sx={{ fontWeight: 'bold' }}>10/23</Typography>
              </CardContent>
              <CardContent sx={{ ml: 'auto', mt: 'auto', fontWeight: 'bold' }}>
                <JoinFullIcon />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>Total Transaction</Typography>
                <Typography variant='h5' sx={{ fontWeight: 'bold', mt: -0.5, ml: 24 }}>...</Typography>
              </Typography>
              <hr style={{ width: '96%' }} />
            </Box>
            <Card elevation={5} sx={{ display: 'flex', background: 'white', mb: 2 }}>
              <CardContent>
                <Typography component="h3" sx={{ display: 'flex' }}>
                  <img src={Adidas} alt="Adidas store" style={{ marginTop: '3%', marginRight: '5px', width: '22%', height: '17%' }} />
                  <Typography sx={{ fontWeight: 'bold', mt: 2 }}> Adidas store <br /> June 20</Typography>
                </Typography>
              </CardContent>
              <CardContent sx={{ ml: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography component="h3" sx={{ mt: 2, fontWeight: 'bold', display: 'flex' }}>
                  -$12.58 <br /> Shoes
                </Typography>
              </CardContent>
            </Card>
            <Card elevation={5} sx={{ display: 'flex', background: 'white', mb: 2 }}>
              <CardContent>
                <Typography component="h3" sx={{ fontWeight: 'bold', display: 'flex' }}>
                  <img src={Netflix} alt="Netflix" style={{ marginTop: '6%', marginRight: '5px', width: '15%', height: '10%' }} />
                  <Typography sx={{ fontWeight: 'bold', mt: 1.5 }}> Netflix <br /> June 20</Typography>
                </Typography>
              </CardContent>
              <CardContent sx={{ ml: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography component="h3" sx={{ mt: 2, fontWeight: 'bold', display: 'flex' }}>
                  -$10.22 <br /> Subscribe
                </Typography>
              </CardContent>
            </Card>
            <Card elevation={5} sx={{ display: 'flex', background: 'white', mb: 2 }}>
              <CardContent>
                <Typography component="h3" sx={{ fontWeight: 'bold', display: 'flex' }}>
                  <AppleIcon sx={{ marginTop: '6%', marginRight: '5px', width: '18%', height: '13%' }} />
                  <Typography sx={{ fontWeight: 'bold', mt: 1.5 }}> Apple <br /> June 20</Typography>
                </Typography>
              </CardContent>
              <CardContent sx={{ ml: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography component="h3" sx={{ mt: 2, fontWeight: 'bold', display: 'flex' }}>
                  -$20.32 <br /> Accessories
                </Typography>
              </CardContent>
            </Card>
            <Grid item lg={12} xs={12} md={6} sx={{ mt: 8 }}>
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ display: 'flex' }}>
                  <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>Last Week</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 'bold', mt: -0.5, ml: 34 }}>...</Typography>
                </Typography>
                <hr style={{ width: '97%' }} />
              </Box>
              <Card elevation={5} sx={{ display: 'flex', background: 'white', mb: 2 }}>
                <CardContent>
                  <Typography component="h3" sx={{ fontWeight: 'bold', display: 'flex' }}>
                    <img src={Spotify} alt="Spotify" style={{ marginTop: '4%', marginRight: '5px', width: '38%', height: '28%' }} />
                    <Typography sx={{ mb: -1, fontWeight: 'bold' }}>Spotify <br /> June 13</Typography>
                  </Typography>
                </CardContent>
                <CardContent sx={{ ml: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography component="h3" sx={{ fontWeight: 'bold', display: 'flex' }}>
                    -$10.22 <br /> Subscribe
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 1, display: 'flex' }}>
              <Typography>
                <Typography variant='h5' sx={{ fontWeight: 'bold', }}>This Week</Typography>
                <Typography variant='h6' sx={{ m: 0, p: 0 }}>13-20-2021</Typography>
              </Typography>
              <Typography sx={{ mt: 2, ml: 23 }}>
                <Button href='' sx={{
                  background: 'orange',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'orange',
                  },
                  '&:active': {
                    backgroundColor: 'orange',
                  },
                }} >
                  weekly  <ArrowDownwardIcon sx={{ ml: 1 }} />
                </Button>
              </Typography>
            </Box>
            <Card elevation={5} sx={{ mt: 2, background: 'white', mb: 2, height: 130 }}>
              <ResponsiveContainer sx={{ width: "90%", height: "40%" }}>
                <BarChart data={data} style={{ marginTop: '3%' }}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#800080" style={{ width: '50%', height: '30%' }} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            <Card elevation={5} sx={{ mt: 4, background: 'white', mb: 2, height: 427 }}>
              <Box sx={{ mt: 1, mb: 1, display: 'flex' }}>
                <Typography>
                  <Typography variant='h5' sx={{ ml: 3, mt: 1, fontWeight: 'bold', }}>Expense</Typography>
                  <Typography variant='h6' sx={{ ml: 3 }}>$53,24</Typography>
                </Typography>
                <Typography sx={{ mt: 2, ml: 21 }}>
                  <Button href='' sx={{
                    background: 'orange',
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'orange',
                    },
                    '&:active': {
                      backgroundColor: 'orange',
                    },
                  }}>
                    View Report
                  </Button>
                </Typography>
              </Box>
              <Typography sx={{ ml: 3, mt: 2 }}>Transactiom from 7-13 jun-2021</Typography>
              <ResponsiveContainer width="100%" height="50%" style={{ marginLeft: '-2%', marginTop: '7%' }}>
                <LineChart
                  width={600}
                  height={390}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Line type="monotone" dataKey="pv" stroke="#800080" />
                  <Line type="monotone" dataKey="uv" stroke="#FFA500" />
                </LineChart>
              </ResponsiveContainer>
              <CardContent sx={{ mt: 1 }}>
                <Typography sx={{ display: 'flex' }}>
                  <Typography sx={{ ml: 2, display: 'flex' }}>
                    <Typography><StarIcon sx={{ mr: 1, mb: -1, color: 'orange' }} /></Typography>
                    <Typography sx={{ mt: 0.3, fontWeight: 'bold' }}>Last week</Typography>
                  </Typography>
                  <Typography sx={{ ml: 10, display: 'flex' }}>
                    <Typography><StarBorderIcon sx={{ mr: 1, mb: -1 }} /></Typography>
                    <Typography sx={{ mt: 0.3, fontWeight: 'bold' }}>Today</Typography>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </div>
  )
}

export default Main
