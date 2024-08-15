import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Calendar from '../Calender/index.tsx';
import { Chip, Divider, Paper, Stack } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Booking() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
      <Container component="main" maxWidth="lg" sx={{marginBottom :'10vh'}}>
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
            <CalendarTodayOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
           Book a slot
          </Typography>
   
        </Box>
        <CssBaseline />

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Item>
                    <Calendar/>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                <Typography component="h1" variant="h6" sx = {{ color: defaultTheme.palette.text.primary}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />  Dentistry
          </Typography>
                  <hr/>
                <Stack direction="row" spacing={1}>
                  <Chip label="8 AM - 6 PM" onClick={handleClick} />
                </Stack>
                    
                </Item>
            </Grid>    
        </Grid>
        
      </Container>
    
  );
}