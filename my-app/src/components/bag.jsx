import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faCircleXmark
  } from "@fortawesome/free-solid-svg-icons";
  
 import styles from "../css/Bag.module.css";

class Bag extends Component {
    state = {  } 
    /* NOT FINAL NEED SOME IMPROVMENT IN CSS BUT GOOD FOR A BEGINING */
     /* 
     1- FIX ZOOM PROBLEMS 
     2- COUNTER PROBLEMS
     3- CSS ADJUSTMENT
     */
   
    render() { 
        return (
       <div className={styles.bagcontainer} >
        <div className={styles.bag}>
         <div className={styles.productcard}>
                <img className={styles.productcardimg} src="https://cdn.shopify.com/s/files/1/0605/1338/6692/products/E22CHECL0029_BLF3_hd-mface_533x.jpg?v=1646930100">
                </img>
            <div >
              <p className={styles.productcarddescription}> chemise</p>
            </div>
           <div >
           <p className={styles.productcardprice}>2500DZD</p>
           </div>
            <div>
              <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.productcounticon} fontSize={30} />
              <input type="number" className={styles.productcount} min="1"></input>   {/* PROBLEME INPUT IS TAKING STYLE OF LOGINPAGE.CSS DIDNT FIX IT YET*/}
              <FontAwesomeIcon icon={faCircleArrowRight} className={styles.productcounticon} fontSize={30} />
            </div>
            <div>
            <p class={styles.productcardrealprice}>5000DZD</p>
            </div>
            <div> 
            <FontAwesomeIcon icon={faCircleXmark} className={styles.productdeletebutton} fontSize={30} />
            </div>
        

         </div>

         </div>
         </div>
         
        );
    }
}
 
export default Bag ;