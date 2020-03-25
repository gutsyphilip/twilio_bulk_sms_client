import React from "react";
import "./Audience.css";
import plus from "./plus.svg";

class Audience extends React.Component {
  state = {
    phones: {}
  };

  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      phones: { ...prevState.phones, [name]: value }
    }));
  };

  removeField = key => {
    const { phones } = this.state;
    const { [key]: field, ...rest } = phones;
    this.setState({ phones: rest });
  };

  addField = () => {
    this.setState(prevState => ({
      phones: {
        ...prevState.phones,
        [Object.keys(prevState.phones).length.toString()]: ""
      }
    }));
  };

  sendMessage = () => {
    const { phones } = this.state;
    const numbers = Object.values(phones);
    this.props.send(numbers);
  };

  render() {
    const { phones } = this.state;
    const { error } = this.props;
    const keys = Object.keys(phones).map(key => key.toString());
    return (
      <div className={"audience"}>
        <p className={"audience-step"}>Step 2 of 3</p>
        <p className="audience-title">Create Message Audience</p>
        <p className="audience-description">
          Add the phone numbers of your target audience in international format
          e.g +234 XXXXXXXX
        </p>

        {keys.map(key => (
          <div className="audience-numbers">
            <input
              className={"audience-input"}
              name={key}
              value={phones[key] || ""}
              onChange={this.inputChange}
              type="text"
            />
            <span
              className={"audience-input-text"}
              onClick={() => this.removeField(key)}
            >
              Remove
            </span>
          </div>
        ))}

        <p className={"audience-add-phone"}>
          <img
            onClick={this.addField}
            src={plus}
            className={"audience-plus-button"}
            alt={"plus button"}
          />
          <span>Add another phone number</span>
        </p>
        {error ? (
          <p className={"audience-message"}>
            Ooops! We are unable to send this message at this time.
          </p>
        ) : null}

        <p className={"audience-phone-count"}>
          {keys.length} Phone number(s) added
        </p>
        <button className={"audience-send-button"} onClick={this.sendMessage}>
          Send message
        </button>
        <button onClick={this.props.goBack} className={"cancel-button"}>
          Back
        </button>
      </div>
    );
  }
}

export default Audience;
