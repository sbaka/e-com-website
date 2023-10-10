import React, { Component } from "react";
import Card from "./Card.tsx";
import styles from "../css/components/CardList.module.css";
import { productData } from "../data/dummyProducts.js";
class CardList extends Component {
  state = {
    chemises: [
      {
        img: "https://static.galerieslafayette.com/media/3004119/300411997486/G_300411997486_60_360x393_1.jpg",
        description: "ZARA chemise",
        promotion: 3000,
        price: 4000,
      },
      {
        img: "https://images.stylight.net/image/upload/t_web_product_330x440max_nobg/q_auto:eco,f_auto/yzblht2hl2wzvqmt42uq.jpg",
        description: "PULL&BEAR chemise",
        promotion: 3500,
        price: 4500,
      },
      {
        img: "https://www.vondutch.fr/8599-large_default/chemise-von-dutch-homme-manches-longues-unie-john.jpg",
        description: "POLO chemise",
        promotion: 3500,
        price: 5000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },

      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://static.galerieslafayette.com/media/3004119/300411997486/G_300411997486_60_360x393_1.jpg",
        description: "ZARA chemise",
        promotion: 3000,
        price: 4000,
      },
      {
        img: "https://images.stylight.net/image/upload/t_web_product_330x440max_nobg/q_auto:eco,f_auto/yzblht2hl2wzvqmt42uq.jpg",
        description: "PULL&BEAR chemise",
        promotion: 3500,
        price: 4500,
      },
      {
        img: "https://www.vondutch.fr/8599-large_default/chemise-von-dutch-homme-manches-longues-unie-john.jpg",
        description: "POLO chemise",
        promotion: 3500,
        price: 5000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },

      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
      {
        img: "https://www.aigle.com/on/demandware.static/-/Sites-master-akeneo/default/dw5dcf3f07/images/asset/3/0/9/3/3093b19486b8ce08e1069d1f08b5b4653e15d8f9_N9681_1.jpg?frz-v=122",
        description: "BLACK&WHITE chemise",
        promotion: 5000,
        price: 7000,
      },
    ],
  };
  render() {
    return (
      <div className={styles.cards}>
        {this.state.chemises.map((chemise) => (
          <Card
            img={chemise.img}
            description={chemise.description}
            price={chemise.price}
            promotion={chemise.promotion}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
