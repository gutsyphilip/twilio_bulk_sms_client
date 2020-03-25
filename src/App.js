import React from "react";
import Home from "./Screens/Home/Home";
import Message from "./Screens/Message/Message";
import Audience from "./Screens/Audience/Audience";
import End from "./Screens/End/End";

import { sendMessage } from "./utils/api";

class App extends React.Component {
  state = {
    step: 1,
    message: "",
    error: false
  };

  nextStep = () => {
    this.setState(prevState => ({
      step: prevState.step + 1 <= 4 ? prevState.step + 1 : 1
    }));
  };

  previousStep = () => {
    this.setState(prevState => ({
      step: prevState.step - 1 >= 0 ? prevState.step - 1 : 1
    }));
  };

  changeMessage = e => {
    const message = e.target.value;
    this.setState({ message });
  };

  sendMessage = async numbers => {
    const { message } = this.state;
    console.log("Sending message:", message, "to: ", numbers);
    try {
      const res = await sendMessage(numbers, message);
      console.log("API response :>", res.data);
      this.setState(prevState => ({
        step: prevState.step + 1 <= 4 ? prevState.step + 1 : 1,
        message: ""
      }));
    } catch (e) {
      console.error(e.response);
      this.setState({ error: true });
    }
  };

  render() {
    let component = null;
    const { step, message } = this.state;
    switch (step) {
      case 1:
        component = <Home next={this.nextStep} />;
        break;
      case 2:
        component = (
          <Message
            message={message}
            next={this.nextStep}
            goBack={this.previousStep}
            change={this.changeMessage}
          />
        );
        break;
      case 3:
        component = (
          <Audience send={this.sendMessage} goBack={this.previousStep} />
        );
        break;
      case 4:
        component = <End home={this.nextStep} />;
        break;
      default:
        component = <Home />;
    }
    return <div className="App">{component}</div>;
  }
}

export default App;
