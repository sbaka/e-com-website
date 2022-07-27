import { Component } from "react";
import MultiRangeSlider from "../components/multiSlider"
import styles from "../css/SideBar.module.css"
class SideBar extends Component {
    render() {
        return (
            <div className={styles.sideContainer}>
                <div className={styles.space}></div>
                <h2>Filter</h2>
                <hr className={styles.hr} />
                <br />
                <ul>
                    <h4>Categories</h4>
                    <li>
                        <input type="checkbox" name="tshirt" className={styles.sideElt} /> 
                        <label className={styles.label} for="tshirt">T-shirt</label>
                    </li>
                    <li>
                        <input type="checkbox" name="Chemises" className={styles.sideElt} /> 
                        <label className={styles.label} for="Chemises">Chemises</label>
                    </li>
                    <li>
                        <input type="checkbox" name="Shorts" className={styles.sideElt} /> 
                        <label className={styles.label} for="Shorts">Shorts</label>
                    </li>
                    <li>
                        <input type="checkbox" name="Pantalons" className={styles.sideElt} /> 
                        <label className={styles.label} for="Pantalons">Pantalons</label>
                    </li>
                </ul>
                <br />
                <hr className={styles.hr} />
                <br />
                <ul>
                    <h4>Brands</h4>
                    <li>
                        <input type="checkbox" name="Nike" className={styles.sideElt} /> 
                        <label className={styles.label} for="tshirt">Nike</label>
                    </li>
                    <li>
                        <input type="checkbox" name="Adidas" className={styles.sideElt} /> 
                        <label className={styles.label} for="Chemises">Adidas</label>
                    </li>
                    <li>
                        <input type="checkbox" name="Puma" className={styles.sideElt} /> 
                        <label className={styles.label} for="Shorts">Puma</label>
                    </li>
                    <li>
                        <input type="checkbox" name="Pantalons" className={styles.sideElt} /> 
                        <label className={styles.label} for="Pantalons">Zara</label>
                    </li>
                </ul>
                <br />
                <hr className={styles.hr} />
                <br />
                <h4>Price</h4>
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>
        )
    }
}
export default SideBar;