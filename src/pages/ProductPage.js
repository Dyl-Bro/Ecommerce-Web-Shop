import React , {useState, useEffect} from 'react';
import axios from '../axios';
import ProductCard from '../ProductCard';
import SearchFilter from '../SearchFilter';

function ProductPage(){

    const [ products , setProducts ] = useState([]);
    const [ categories, setCategories] = useState([]);
    
    useEffect(() => {
        //write an asyn function inside of use effect because you vant actually use async things inside useEffect 
        async function getData(){
            const request = await axios.get('/products');
            console.log(request);
            setProducts(request.data);
            return request;
        }
        getData();
    }, [])// if we leave blank it will run once (on page load), if we put a variable inside it will 
    //run anytime the variable changes. also, if we use any variable in the useEffect that wasnt defined in it we must put it in
    //the square brackets of the use effect because it is now a dependency and everytime it changes our useeffect will update(run again)  
    //console.log(products);


    useEffect(() =>{
         async function getCategories(){
            const request =  await axios.get('/categories')
            console.log(request);
            setCategories(request.data);
            return request;
        }
        getCategories();
    }, [])
    


    return (
    <div className = "productpage">
        <div className = "search_filter">
            <SearchFilter categories = {categories}/>
        </div>
        <div className = "productcard"><ProductCard products = {products}/></div>
    </div>
        
    )
}

export default ProductPage;