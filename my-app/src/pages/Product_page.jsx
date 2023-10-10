import { Component } from "react";
import Header from "../components/header";
import ProductInfo from "../components/ProductInfo"; 


class Product extends Component {
    render(){
        return(<div className="Product">
            <Header/>
            <ProductInfo/>
        </div>)
        
    }
}
export default Product;