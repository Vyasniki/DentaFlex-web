import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, CssBaseline, Grid, styled } from '@mui/material';
import banner from '../../public/banner_new.png'

export default function Hero() {
  const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{  height: '100vh', marginTop: '10vh' }} >

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <GridItem>xs=8</GridItem>
          </Grid>
          <Grid item xs={6}>
            <GridItem sx={{ boxShadow: "none" }}>
              <img src={banner} />
            </GridItem>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
