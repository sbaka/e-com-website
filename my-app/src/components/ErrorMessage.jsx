import React from "react";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import styles from "../css/components/ErrorMessage.module.css";
type props = {
  message: string,
};
class ErrorMessage extends React.Component<props, any> {
  isEmpty = (object) => {
    for (const property in object) {
      return false;
    }
    return true;
  };
  render() {
    // console.log(this.props);

    return !this.isEmpty(this.props.message) ? (
      <div className={styles.container}>
        <ErrorTwoToneIcon sx={{ color: "#F32424" }} />
        <div className={styles.spacer}></div>
        <p>{this.props.message}</p>
      </div>
    ) : (
      ""
    );
  }
}

export default ErrorMessage;
