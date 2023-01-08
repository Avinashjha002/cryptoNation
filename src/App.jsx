import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Coin from './pages/Coin';
import { makeStyles } from '@material-ui/core/styles';  

const useStyles = makeStyles({
  App: {
    backgroundColor: '#0a1120',
    color: "white",
    minHeight: "100vh", 
  },
});

function App() {

  const classes = useStyles()
    

  return (

    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/coins/:id" element={<Coin/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
