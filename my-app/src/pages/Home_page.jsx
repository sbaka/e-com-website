import { Component } from "react";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import CardList from "../components/CardList";

import styles from "../css/app.module.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className={styles.container}>
          <SideBar />
          <CardList />
        </div>
      </div>
    );
  }
}
export default App;
