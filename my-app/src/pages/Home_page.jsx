import { Component } from "react";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import CardList from "../components/CardList";
import Sortby from "../components/Sortby";

import styles from "../css/app.module.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className={styles.space}></div>
        <div className={styles.container}>
          <SideBar />

          <div className={styles.rightside}>
            <div className={styles.up}>
              <h1>MAN</h1>
              <Sortby />
            </div>
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
