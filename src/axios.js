import axios from "axios";

const instance = axios.create({
    baseURL:" http://localhost:4000/api/v1/",
});

//the instance makes it easier to make requests without having to type out the entire path everytime 
//ex: instance.get('/products'); === http://localhost:4000/products

export default instance;