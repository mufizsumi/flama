import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Search as SearchIcon, Logout as LogoutIcon, Home as HomeIcon, Task as TaskIcon, Message as MessageIcon, CalendarTodayOutlined as CalendarTodayOutlinedIcon, Analytics as AnalyticsIcon, MoreVert as MoreVertIcon, Settings as SettingsIcon, AttachFileOutlined as AttachFileOutlinedIcon, ChatBubbleOutlineOutlined as ChatBubbleOutlineOutlinedIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import Athena from '../assests/Athena.png'
import Img1 from '../assests/Igm1.jpg'
import Img2 from '../assests/Img2.jpg'
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Logo from '../assests/logo.png';

const CustomLink = styled(RouterLink)({
  textDecoration: 'none',
  color: '#393910',
});

const drawerWidth = 220;

const Tasks = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar position="fixed" sx={{ zIndex: 1400, backgroundColor: 'purple' }}>
        <Toolbar>
          <img src={Logo} alt='logo.png' style={{ width: '10%', height: '10%', backgroundColor: 'white' }} />
          <Box sx={{ flex: 1, marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px' }}>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{ pl: '15px', ml: 10, flex: 1, background: 'white', borderRadius: '5px', width: '100%' }}
              endAdornment={
                <IconButton type="submit" sx={{ pr: '15px', background: 'white' }} aria-label="search">
                  <SearchIcon style={{ color: 'purple' }} />
                </IconButton>
              }
            />
          </Box>
          <Box sx={{ marginLeft: '10%' }}>
            <Button variant="contained" sx={{ background: 'white', color: 'black' }}>Admin</Button>
            <IconButton color="inherit" sx={{ mr: 10 }}>
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Drawer
          sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth } }}
          variant="permanent"
          anchor="left"
          PaperProps={{ elevation: 8 }}
        >
          <Box sx={{ mt: 7, ml: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px 0' }}>
            <img src={Athena} alt="Profile" style={{ width: '30px', height: '32px', borderRadius: '50%', }} />
            <Typography variant="subtitle1" sx={{ ml: 3, fontWeight: 'bold' }}>Athena</Typography>
          </Box>
          <List sx={{ ml: 2 }}>
            {[
              { text: 'Home', icon: <HomeIcon /> },
              { text: 'Tasks', icon: < TaskIcon /> },
              { text: 'Messages', icon: <MessageIcon /> },
              { text: 'Calendar', icon: <CalendarTodayOutlinedIcon /> },
              { text: 'Analysis', icon: <AnalyticsIcon /> },
              { text: 'More (6)', icon: <MoreVertIcon /> }
            ].map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <hr style={{ width: '80%', marginTop: '30px', borderColor: 'gray' }}></hr>
          <List sx={{ ml: 2 }}>
            <ListItem button key="Settings">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <CustomLink to="/">
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon sx={{ transform: 'rotateY(180deg)', mr: 1 }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </CustomLink>
          </List>
          <Box sx={{ mt: 'auto', mb: 2, textAlign: 'center' }}>
            <Button
              href=''
              sx={{
                background: 'orange',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'orange',
                },
                '&:active': {
                  backgroundColor: 'orange',
                },
              }}
            >
              Create now
            </Button>
          </Box>
        </Drawer>

        <Box component="main" sx={{ mt: 10, flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
              <Card sx={{ background: '#E24B2B', color: 'white' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold' }}> Total tracked time</Typography>
                  452:39:00
                </CardContent>
              </Card>
              <Box sx={{ width: '97%', mt: 4, }}>
                <Typography sx={{ display: 'flex', }}>
                  <Typography sx={{ ml: 1, fontWeight: 'bold' }}>Backlog</Typography>
                  <Typography sx={{ ml: 18.9, mt: -1.8, fontWeight: 'bold', fontSize: '28px', color: 'purple' }}>...</Typography>
                </Typography>
                <Card sx={{ ml: 0.7, mt: 1, }} elevation={8}>
                  <Box sx={{ display: 'flex' }}>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: 'purple', color: 'white', width: '5rem', height: '2rem' }}>Design</Button>
                    <Button sx={{ ml: 11.7, textTransform: 'none', background: 'orange', color: 'white', height: '1.6rem' }}>Urgent</Button>
                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Product Photos</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>24/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>54</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', ml: 1 }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>1</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          left: '23px',
                          zIndex: 2,
                        }}
                        image={Img2}
                        alt="Rounded Image 2"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '43px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ ml: 0.7, mt: 3, }} elevation={8}>
                  <Box>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#3AD95E', color: 'white', width: '7rem', height: '2rem' }}>Consulting</Button>
                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Business optimization</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>30/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>12</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>43</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, #85E572 70%, black 30%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '30px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ ml: 0.7, mt: 3, }} elevation={8}>
                  <Box>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#F46A1C', color: 'white', width: '5rem', height: '2rem' }}>Design</Button>                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Dribble shots</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>30/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>12</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>43</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          left: '23px',
                          zIndex: 2,
                        }}
                        image={Img2}
                        alt="Rounded Image 2"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '43px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

              </Box>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ background: '#6223DD', color: 'white' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold' }}> Productivity</Typography>
                  97.32%
                </CardContent>
              </Card>
              <Box sx={{ width: '97%', mt: 4, }}>
                <Typography sx={{ display: 'flex', }}>
                  <Typography sx={{ ml: 1, fontWeight: 'bold' }}>In Progress</Typography>
                  <Typography sx={{ ml: 15, mt: -1.8, fontWeight: 'bold', fontSize: '28px', color: 'purple' }}>...</Typography>
                </Typography>
                <Card sx={{ ml: 0.7, mt: 1, }} elevation={8}>
                  <Box sx={{ display: 'flex' }}>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#ABC6EA', color: 'black', width: '1rem', height: '2rem' }}>UI</Button>
                    <Button sx={{ ml: 13.2, textTransform: 'none', background: 'orange', color: 'white', height: '1.6rem' }}>Urgent</Button>
                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Landing page design</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>24/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>54</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', ml: 1 }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>1</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '30px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <Card sx={{ ml: 0.7, mt: 3, }} elevation={8}>
                  <Box>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#F46A1C', color: 'white', width: '5rem', height: '2rem' }}>Design</Button>                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Dribble shots</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>30/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>12</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>43</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          left: '23px',
                          zIndex: 2,
                        }}
                        image={Img2}
                        alt="Rounded Image 2"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '43px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ background: '#239B15', color: 'white' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold' }}> Due Date</Typography>
                  16 Aug 2021
                </CardContent>
              </Card>
              <Box sx={{ width: '97%', mt: 4, }}>
                <Typography sx={{ display: 'flex', }}>
                  <Typography sx={{ ml: 1, fontWeight: 'bold' }}>in Reviewed</Typography>
                  <Typography sx={{ ml: 15, mt: -1.8, fontWeight: 'bold', fontSize: '28px', color: 'purple' }}>...</Typography>
                </Typography>
                <Card sx={{ ml: 0.7, mt: 1, }} elevation={8}>
                  <Box sx={{ display: 'flex' }}>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#EE9BF6', color: 'black', width: '2rem', height: '2rem' }}>UX</Button>
                    <Button sx={{ ml: 13.8, textTransform: 'none', background: 'orange', color: 'white', height: '1.6rem' }}>Urgent</Button>
                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>E-commerce audit</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>24/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>1</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', ml: 1 }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>4</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          left: '23px',
                          zIndex: 2,
                        }}
                        image={Img2}
                        alt="Rounded Image 2"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '43px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ ml: 0.7, mt: 3, }} elevation={8}>
                  <Box>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#3AD95E', color: 'white', width: '7rem', height: '2rem' }}>Consulting</Button>
                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Design strategy</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>23/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>4</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>51</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, blue 70%, black 30%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '30px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ ml: 0.7, mt: 3, }} elevation={8}>
                  <Box>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#ABC6EA', color: 'black', width: '5rem', height: '2rem' }}>UI</Button></Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Dribble shots</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>30/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>12</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>43</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          left: '23px',
                          zIndex: 2,
                        }}
                        image={Img2}
                        alt="Rounded Image 2"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '43px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ background: '#AE14B5', color: 'white' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold' }}> Attachments</Typography>
                  54
                </CardContent>
              </Card>
              <Box sx={{ width: '97%', mt: 4, }}>
                <Typography sx={{ display: 'flex', }}>
                  <Typography sx={{ ml: 1, fontWeight: 'bold' }}>Finished</Typography>
                  <Typography sx={{ ml: 18, mt: -1.8, fontWeight: 'bold', fontSize: '28px', color: 'purple' }}>...</Typography>
                </Typography>
                <Card sx={{ ml: 0.7, mt: 1, }} elevation={8}>
                  <Box sx={{ display: 'flex' }}>
                    <Button sx={{ ml: 1, mt: 1, textTransform: 'none', background: '#d6f3ef', color: 'black', width: '2rem', height: '2rem' }}>Testing</Button>
                  </Box>
                  <CardContent sx={{ ml: -1, }}>
                    <Typography sx={{ fontWeight: 'bold' }}>parching process</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, ml: -0.4, }}>
                      <Typography><CalendarTodayOutlinedIcon sx={{ width: '2rem', height: '1.3rem' }} /></Typography>
                      <Typography sx={{ ml: 0.6 }}>12/07/21</Typography>
                      <Typography sx={{ display: 'flex', ml: 4 }}>
                        <Typography sx={{ display: 'flex' }}><AttachFileOutlinedIcon sx={{ width: '2rem', height: '1.3rem', transform: 'rotate(-140deg)' }} />
                          <Typography>1</Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex', ml: 1 }}><ChatBubbleOutlineOutlinedIcon sx={{ width: '2rem', height: '1.3rem', }} />
                          <Typography>4</Typography>
                        </Typography>
                      </Typography>
                    </Typography>
                    <hr style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, red 30%, black 50%)', border: 'none', margin: '20px 0', }}></hr>
                    <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                        image={Img1}
                        alt="Rounded Image 1"
                      />
                      <Box
                        sx={{
                          height: '35px',
                          width: '35px',
                          borderRadius: '50%',
                          backgroundColor: '#D6F3EF',
                          border: '1px solid black',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          left: '30px',
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>+</Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Tasks;
