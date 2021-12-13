
import './App.css';
import Axios from "axios";
import ProductPage from '../src/pages/ProductPage';
import SignIn from '../src/pages/SignIn';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {Route, Link} from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[900]),
  backgroundColor: indigo[900],
  '&:hover': {
    backgroundColor: indigo[200],
  },
}));

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:4000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="app">
      {/*----------------------------APP HEADER---------------------------*/}
      <div className="app_header">
        <div className ="app_header_left"> <h1>Welcome.</h1></div>
        <div className ="app_header_right">
        <Stack direction = "row" spacing = {3}>
        <Link to = "/productpage"><ColorButton variant="outlined" endIcon={< ShoppingBagOutlinedIcon/>}>SHOP</ColorButton></Link>
        <Link to ="/sign_in_page"><ColorButton variant="outlined" endIcon={< AccountBoxIcon/>}>LOGIN/SIGNUP</ColorButton></Link>
        <ColorButton variant="outlined" endIcon={< ContactSupportOutlinedIcon/>}>CONTACT US</ColorButton>
        </Stack>
        </div>
      </div>
      {/*------------------------CONTACT POP-UP-------------------------*/}
      {/*------------------------PRODUCT PAGE-------------------------*/}
      <Route exact path="/productpage" component = {ProductPage}/>
      {/*------------------------SIGNUP/SIGNIN POP-UP-------------------------*/}
      <Route exact path="/sign_in_page" component = {SignIn}/>
      
    </div>
  );
}

export default App;
