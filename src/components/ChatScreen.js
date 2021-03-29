import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Abdullah",
      image: "...",
      message: "Whats up",
    },
    {
      name: "Abdullah",
      image: "...",
      message: "How's it going?",
    },
    {
      message: "Hi how are you Abdullah?",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen-timestamp">
        You matched with Michelle on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen-message">
            <Avatar
              className="chatScreen-Avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen-message">
            <p className="chatScreen-textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen-inputField"
            type="text"
            placeholder="Type a message..."
          />
          <button
            className="chatScreen-inputButton"
            type="submit"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
