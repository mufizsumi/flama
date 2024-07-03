import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Link, Divider } from '@mui/material';
import ForgotPasswordImg from '../assests/ForgotPasswordImg.png';
import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Forgot password requested for:', email);

  };

  return (
    <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <img src={ForgotPasswordImg} alt="Forgot Password" style={{ width: '80%', height: '80%' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} style={{ padding: '20px' }}>
          <Typography style={{ paddingBottom: '3%', color: 'orange', fontWeight: 'bold' }} variant="h4" gutterBottom>
            Forgot Your <br></br> Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth style={{ height: '110%', background: 'purple', color: 'white', fontWeight: 'bold' }}>
                  Reset Password
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography style={{ fontWeight: 'bold' }}>Back To <Link href="/" style={{ color: 'orange', textDecoration: 'none' }}> Log in </Link></Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  
  );
};

export default ForgotPassword;
