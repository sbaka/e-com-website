import React from "react";
//https://www.npmjs.com/package/react-tooltip
import { Rings } from "react-loader-spinner";
class Loader extends React.Component {
  render() {
    return (
      // for more info : https://www.npmjs.com/package/react-loader-spinner
      <React.Fragment>
        <div className="loader">
          <Rings height={100} color="#34495e" width={110} />
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;
