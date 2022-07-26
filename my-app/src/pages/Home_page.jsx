import { Component } from "react";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import Bag from "../components/bag";
import styles from "../css/app.module.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className={styles.container}>
          <SideBar />
          <Main />
        </div>
       <a href="/Bag" fontSize={30}>CART NOT FINISH YET</a>
      </div>
    );
  }
}
export default App;
