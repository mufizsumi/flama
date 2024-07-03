import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Link, Divider, Checkbox } from '@mui/material';
import Img from '../assests/img.png';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
// import Desboard from './Desboard';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response);
  };

 const handleLogin = () => {
    navigate('/Dashboard');
  };

  return (
    <GoogleOAuthProvider clientId='' >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid style={{ marginTop: '5%' }} item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
              <Typography style={{ paddingBottom: '3%', color: 'orange', fontWeight: 'bold' }} variant="h4" gutterBottom>
                Login
              </Typography>
              <form>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography style={{fontWeight:'bold', fontSize:'18px'}}>Email</Typography>
                    <TextField placeholder='enter your email or username' variant="outlined" fullWidth type='email' required />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={{ fontWeight: 'bold', fontSize:'18px' }}>Password</Typography>
                      <TextField placeholder='enter your password' type="password" variant="outlined" fullWidth />
                  </Grid>
                  <Grid style={{ display: 'flex' }} item xs={12}>
                    <Grid item xs={12} container alignItems="center">
                      <Checkbox />
                      <Typography style={{ fontWeight: 'bold' }}>Remember me</Typography>
                    </Grid>

                    <Grid item xs={12} container alignItems="center" style={{ marginLeft: '30%' }}>
                      <Typography >
                        <Link style={{ color: 'orange', textDecoration: 'none', }} href="/ForgotPassword" color="primary" underline="none">Forgot Password?</Link>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Button onClick={handleLogin} variant="contained" fullWidth style={{ background: 'purple', fontWeight: 'bold', }}>
                      Login
                    </Button>
                  </Grid>
                  <Grid style={{ textAlign: 'center' }} item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }}>Doesn't have an account?   <Link style={{ color: 'orange', textDecoration: 'none' }} href="SignUp" color="primary">Sign Up</Link></Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider style={{ borderColor: 'black' }}>Or login with</Divider>
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
                  <Grid style={{ marginLeft: '30%' }} item xs={4}>
                    <Button type="submit" variant="contained" fullWidth style={{ fontWeight: 'bold', background: ' #3b5998' }}>
                      <FacebookIcon style={{ marginRight: '30px' }} />
                      <Link href='https://www.facebook.com/' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Facebook</Link>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid style={{ paddingTop: '8%', paddingLeft: '10%' }} item xs={12} md={6}>
            <img src={Img} alt="Login" style={{ width: '90%', height: '70%', objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Container>
    </GoogleOAuthProvider>

  );
};

export default Login;
