import './ProductCard.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
import { indigo } from '@mui/material/colors';
import { blue } from '@mui/material/colors';


 function ProductCard(props) {
    const products = props.products;
    console.log(products)
    if(products.length > 0){
        return (
             products.map((product,  index) => {
                console.log(product);
                //console.log(product.category);
                 return (
                    <div className= "productCards">
                        <Card className = "productCard" variant = "outlined">
                            <CardHeader className="card_header"
                            avatar={
                                <Avatar sx={{ bgcolor: blue[900] }} aria-label="recipe">
                                  :^)
                                </Avatar>
                              }
                              
                              title={product.name} 
                              //subheader={product.price}
                              >
                      
                            
                            </CardHeader>
                            
                            <CardMedia
                            className="product_image"
                            component="img"
                            image = {product.image}
                            height = "194"
                            
                           
                            
                            
                            
                            />
                            <CardContent>
                                <ul className="card_content">
                                <li>{product.description}</li>
                                <br/>
                                <li><Typography>Price: ${product.price}</Typography></li>
                                </ul>
                            
                            </CardContent>
                            <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                            <Typography>More Below</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{product.richDescription}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </div>
                )
            })
        )
    } else {
        return(<h1>No products to display.</h1>)
    }
    
}

export default ProductCard
