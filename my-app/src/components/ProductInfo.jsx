import {Component} from "react";
import {productData} from "../data/dummyProducts" ;
import style from "../css/productpage.module.css";

class ProductInfo extends Component{
    render(){
        return(
        <div className={style.container}>    
            <div className={style.info}>{/*product description*/} 
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
            <div className={style.pics}>{/*product pictures*/} 
                <img className={style.mainpic} src={productData.chemises[0].img} />
                <img className={style.secondarypics} src={productData.chemises[0].img} />
                <img className={style.secondarypics} src={productData.chemises[0].img} />
                <img className={style.secondarypics} src={productData.chemises[0].img} />
            </div>
            <div className={style.availability}>{/*what sizes and colors are available*/} 
                <div>
                    <h3>SIZES AVAILABLE</h3>
                    <ul>
                        <li className={style.boxes}>
                            <p className={style.sizes}>XS</p>
                        </li>
                        <li className={style.boxes}>
                            <p className={style.sizes}>S</p>
                        </li>
                        <li className={style.boxes}>
                            <p className={style.sizes}>M</p>
                        </li>
                        <li className={style.boxes}>
                            <p className={style.sizes}>L</p>
                        </li>
                        <li className={style.boxes}>
                            <p className={style.sizes}>XL</p>
                        </li>
                        <li className={style.boxes}>
                            <p className={style.sizes}>XXL</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <hr className={style.hr}/>
                    <h3>COLORS AVAILABLE</h3>
                    <ul>
                        <li className={style.boxes} style={{backgroundColor: "red"}}>
                        </li>
                        <li className={style.boxes} style={{backgroundColor: "blue"}}>
                        </li>
                        <li className={style.boxes} style={{backgroundColor: "black"}}>
                        </li>
                        <li className={style.boxes} style={{backgroundColor: "green"}}>
                        </li>
                    </ul>
                </div>
                <div className={style.purchase}>
                    <hr className={style.hr}/>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
        )
        
    }
}
export default ProductInfo;