import React, { useState } from "react";
import MessageForm from "./components/MessageForm";
import MessageDisplay from "./components/MessageDisplay";

const App = () => {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <MessageForm onNewMessage={youveGotMail} />
        </div>
        <div className="col">
          <MessageDisplay message={currentMsg} />
        </div>
      </div>
    </div>
  );
};

export default App;
