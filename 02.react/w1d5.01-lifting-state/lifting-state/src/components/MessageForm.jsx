import react, { useState } from "react";

const MessageForm = (props) => {
  const {onNewMessage} = props;
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewMessage(msg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Set Message</h1>
      <textarea
        className="form-control"
        rows="4"
        cols="50"
        placeholder="Enter your message here"
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      ></textarea>
      <input className="btn btn-primary w-100 mt-3" type="submit" value="Send Message" />
    </form>
  );
};

export default MessageForm;
