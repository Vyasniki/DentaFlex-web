import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/AuthProvider';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const auth = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      const email= data.get('email');
      const password= data.get('password');
    
    try{
      if (email !== "" && password !== "") {
        auth.loginAction(data);
        return;
      }
      alert("pleae provide a valid input");
    }catch(ex) {
      console.log("Error Occured" , ex);
      setErrorMessage("Credentials didn't match!")
    }
  }
  

  return (
    auth.token ? (
      <Navigate to="/book" /> // Redirect upon successful login
  ) : ( 
      <Container component="main" maxWidth="xs" sx={{marginBottom :'10vh'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* <form onSubmit={onLoginBtnSubmit}> */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {errorMessage && <Grid item>
                  {errorMessage}
                </Grid>}
              </Grid>
              <Grid container>
              
                <Grid item xs>
                  <NavLink to="/recover" >
                    Forgot password?
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/signup" >
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            {/* </form> */}
          </Box>
        </Box>
      </Container>
  )
  );
  
}