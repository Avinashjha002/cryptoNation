import { AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
// import './Header.css';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color:"white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));



const Header = () => {

  const classes =  useStyles();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  // const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
       <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link to="/">Crypto Nation</Link>
          </Typography>
          <Select 
          variant='outlined'
          style={{
            width: 100,
            height: 40,
            marginRight: 15,
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select> 
        </Toolbar>
      </Container>
    </AppBar>
  </ThemeProvider>
  )
}

export default Header