import { Component } from "react";
import Header from "../components/header";
import SideBar from "../components/SideBar";

class App extends Component{
  render (){
    return (
      <div className="App">
        <Header />
        <SideBar/>
      </div>
    )
  }
}
export default App;
