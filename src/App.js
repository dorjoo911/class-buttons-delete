import "./styles.css";
import Button from "./components/Button";
import React from "react";

export default class App extends React.Component {
  state = {
    buttons: [
      { id: 1, text: "btn1" },
      { id: 2, text: "btn2" },
      { id: 3, text: "btn3" },
      { id: 4, text: "btn4" },
      { id: 5, text: "btn5" }
    ],
    dummy: "dummy"
  };

  deleteBtn = (id) => {
    const newBtns = this.state.buttons.filter((e) => e.id !== id);
    this.setState({ buttons: newBtns });
  };

  render() {
    const myBtns = this.state.buttons.map((b) => (
      <Button key={b.id} text={b.text} deleteBtn={() => this.deleteBtn(b.id)} />
    ));
    return <div className="App">{myBtns}</div>;
  }
}
