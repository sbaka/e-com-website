import {Component} from "react";
import {productData} from "../data/dummyProducts" ;
import style from "../css/productpage.module.css";

class ProductInfo extends Component{
    render(){
        return(
        <div className={style.container}>    
            <div className={style.info}>
                <div>
                    <p>Homme / Chemises</p>
                    <h3>{productData.chemises[0].description}</h3>
                    <h4>{productData.chemises[0].promotion}</h4>
                    
                </div>
                <div>
                    <hr className={style.hr}/>
                    <h3>DESCRIPTION</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum </p>
                    
                </div>
                <div className={style.delivery}>
                    <hr className={style.hr}/>
                    <h3>DELIVERY</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum </p>
                </div>
            </div>
            <div className={style.pics}>
                <img className={style.mainpic} src={productData.chemises[0].img} />
                <img className={style.secondarypics} src={productData.chemises[0].img} />
                <img className={style.secondarypics} src={productData.chemises[0].img} />
                <img className={style.secondarypics} src={productData.chemises[0].img} />
            </div>
            <div>
                
            </div>
        </div>
        )
        
    }
}
export default ProductInfo;