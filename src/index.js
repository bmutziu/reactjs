// console.log("Hello World, Setting up react from Scratch");
import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.modules.scss";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Ecosystem: setting up React from Scratch</h1>
        <h1 className={styles.font}>Hello World</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
