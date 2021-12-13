import './SearchFilter.css';
import ProductCard from './ProductCard';
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, useLocation,} from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from './axios';


function SearchFilter(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [furniture, setFurniture] = useState({});
    const [apparel, setApparel] = useState({});
    const [toys, setToys] = useState({});
    

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchFurniture = async () => {
          try {
            const furniture = await axios.get('/products?categories=6152a629e055a4405b1cc51d');
            setFurniture(furniture.data); 
        } catch (err) {
            console.error(err);
          }
        };
        fetchFurniture();
      }, []);

      useEffect(() => {
        const fetchApparel = async () => {
          try {
            const apparel = await axios.get('/products?categories=6152a974706927df141ba997');
            setApparel(apparel.data); 
        } catch (err) {
            console.error(err);
          }
        };
        fetchApparel();
      }, []);

      useEffect(() => {
        const fetchToys = async () => {
          try {
            const toys = await axios.get('/products?categories=6152a974706927df141ba997');
            setApparel(toys.data); 
        } catch (err) {
            console.error(err);
          }
        };
        fetchToys();
      }, []);

      

    

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[300]),
        backgroundColor: indigo[800],
        '&:hover': {
          backgroundColor: indigo[400],
        },
    }));

    const categories = props.categories;
    console.log(categories.length);
    if (categories.length > 0){
        categories.map((category)=> {
            console.log('These are the categories.....' + category.name + 'ID: ' + category._id);
        })
    } else {
        console.log('no categories')
    }
   
    
    

    return (
        <div>
            <ColorButton
            id="menu-button"
            variant="outlined"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
        Search By Category...
        </ColorButton>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-menu',
            }}
        >
        <div className = "menu-items">
            <Link to={`/products?categories=6152a629e055a4405b1cc51d`}>
                <MenuItem onClick={handleClose} >Furniture</MenuItem>
            </Link>
            <Link to={`/products?categories=6152a974706927df141ba997`}>
                <MenuItem onClick={handleClose}>Apparel</MenuItem>   
            </Link>
            <Link to={`/products?categories=6154972eaa9df7a94558eb9c`}>
                <MenuItem onClick={handleClose}>Toys/Entertainment</MenuItem>
            </Link>
        </div>
        </Menu>
        <Router>
        <Route  path="/products?categories=6152a629e055a4405b1cc51d" element = {<ProductCard products={furniture}/>}/>
        </Router>
        </div>
            
        
    )
}

export default SearchFilter
   