
import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Link, Divider, Checkbox } from '@mui/material';
import Img from '../assests/img.png';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Software from '../assests/software.png'
const SignUp = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId="351436112136-fft5g1et2a5ags7fljr4nncr1mq6ucjf.apps.googleusercontent.com">
      <Container maxWidth="lg" style={{ marginTop: '0%' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: '20px', }}>
              <Typography style={{ paddingBottom: '3%', color: 'orange', fontWeight: 'bold' }} variant="h4" gutterBottom>
                Sign Up
              </Typography>
              <form>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography style={{ fontWeight: 'bold' }}>First Name
                      <TextField placeholder='enter your email or username' variant="outlined" fullWidth type='email' />
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography style={{ fontWeight: 'bold' }}>Secod Name
                      <TextField placeholder='enter your email or username' variant="outlined" fullWidth type='email' />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }}>Email
                      <TextField placeholder='enter your email or username' variant="outlined" fullWidth type='email' />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }}>Password
                      <TextField placeholder='enter your password' type="password" variant="outlined" fullWidth />
                    </Typography>
                  </Grid> 
                  <Grid item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }}>Confirm Password
                      <TextField placeholder='enter your password' type="password" variant="outlined" fullWidth />
                    </Typography>
                  </Grid>
                     
                  <Grid item xs={12}>
                    <Button href='#SignUp' type="submit" variant="contained" fullWidth style={{ background: 'purple', fontWeight: 'bold', }}>
                      Login
                    </Button>
                  </Grid>
                  <Grid style={{ textAlign: 'center' }} item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }}>Already have an account? <Link style={{ color: 'orange',  textDecoration: 'none' }} href="/" color="primary">Sign in</Link></Typography>  
                  </Grid>
                  <Grid item xs={12}>
                    <Divider style={{ borderColor: 'black' }}>Or <span style={{color:'orange'}}>Signup</span> with</Divider>
                  </Grid>
                  <Grid item xs={4}>
                    <GoogleLogin
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      render={(renderProps) => (
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" fullWidth style={{ background: 'white', color: 'black', fontWeight: 'bold' }}>
                          Google
                        </Button>
                      )}
                    />
                  </Grid>
                  <Grid style={{marginLeft:'30%'}} item xs={4}>
                    <Button type="submit" variant="contained" fullWidth style={{ fontWeight: 'bold', background:' #3b5998' }}>
                      <FacebookIcon style={{marginRight:'30px'}}/>
                      <Link href='https://www.facebook.com/' target='_blank' style={{color:'white', textDecoration: 'none'}}>Facebook</Link>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid style={{ paddingTop: '8%', paddingLeft: '10%' }} item xs={12} md={6}>
            <img src={Software} alt="Login" style={{ width: '90%', height: '70%', objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
