import React from "react";
import { productData } from "../data/dummyProducts";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../css/components/alice-carousel.css";
import style from "../css/pages/ProductPage.module.css";

const items = [
  <img src={productData.chemises[0].img} alt="" role="presentation" />,
  <img src={productData.chemises[1].img} alt="" role="presentation" />,
  <img src={productData.chemises[2].img} alt="" role="presentation" />,
];

class ProductInfo extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.info}>
          {/*product description*/}
          <div>
            <p>Homme / Chemises</p>
            <h3>{productData.chemises[0].description}</h3>
            <h4>{productData.chemises[0].promotion} DZD</h4>
          </div>
          <div>
            <hr className={style.hr} />
            <h3>DESCRIPTION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              excepturi, labore nam molestiae ab deserunt, assumenda illum sequi
              totam earum nobis voluptas veritatis odio quaerat maxime natus
              pariatur inventore? Natus?
            </p>
          </div>
          <div className={style.delivery}>
            <hr className={style.hr} />
            <h3>DELIVERY</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus aut impedit corporis inventore quide
            </p>
          </div>
        </div>
        {/* more info come here: https://www.npmjs.com/package/react-alice-carousel */}
        <AliceCarousel mouseTracking items={items} />

        <div className={style.availability}>
          {/*what sizes and colors are available*/}
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
            <hr className={style.hr} />
            <h3>COLORS AVAILABLE</h3>
            <ul>
              <li
                className={style.boxes}
                style={{ backgroundColor: "red" }}
              ></li>
              <li
                className={style.boxes}
                style={{ backgroundColor: "blue" }}
              ></li>
              <li
                className={style.boxes}
                style={{ backgroundColor: "black" }}
              ></li>
              <li
                className={style.boxes}
                style={{ backgroundColor: "green" }}
              ></li>
            </ul>
          </div>
          <div className={style.purchase}>
            <hr className={style.hr} />
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductInfo;
