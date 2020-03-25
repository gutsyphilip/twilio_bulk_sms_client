import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className={"message"}>
      <p className={"message-step"}>Step 1 of 3</p>
      <p className={"message-title"}>Create a message:</p>
      <p className={"message-text"}>
        Enter the message you would like to broadcast.
      </p>
      <textarea
        value={props.message}
        onChange={props.change}
        className={"message-input"}
      />
      <button onClick={props.next} className={"theme-button"}>
        Next
      </button>
      <button onClick={props.goBack} className={"cancel-button"}>
        Back
      </button>
    </div>
  );
}

export default Message;
