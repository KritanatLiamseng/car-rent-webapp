import { useState } from "react";
import styles from "@/styles/Main/chat.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SendIcon from "@mui/icons-material/Send";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const getDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    return `${date}`;
  };
  const getTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${time}`;
  };

  const handleMessageSend = () => {
    const userMessage = newMessage.trim();
    if (userMessage !== "" || imageFile) {
      const times = getTime();
      const date = getDate();
      const message = {
        text: userMessage,
        sender: "user",
        image: imageFile,
        times,
        date,
      };
      setChatHistory((prevChat) => [...prevChat, message]);
      const botResponse = {
        text: `You said: "${userMessage}" - I'm a bot reply!`,
        sender: "bot",
        times,
        date,
      };
      setChatHistory((prevChat) => [...prevChat, botResponse]);
      setNewMessage("");
      setImageFile(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className={styles.chatScreen}>
      <div style={{ width: "100%" }}>
        <div className={styles.top}>
          <Link href={"/Main/MainScreen"}>
            <ChevronLeftIcon style={{color:"#333333"}} />
          </Link>
          <h2 className={styles.header}>หมายเลขการจอง : 123456789</h2>
        </div>

        <div className={styles["chat-history"]}>
          {/* Render chat history with appropriate classes */}
          {chatHistory.map((message, index) => (
            <div key={index} className={styles["chat-message-container"]}>
              <div  className={
                      message.sender === "user"
                        ? styles.layoutUser
                        : styles.layoutBot
                    }>
                <div
                  className={
                    message.sender === "user"
                      ? styles["user-message-timestamp"]
                      : styles["bot-message-timestamp"]
                  }
                >
                  <div
                    className={
                      message.sender === "user"
                        ? styles.timedateUser
                        : styles.timedateBot
                    }
                  >
                    <div>{message.date}</div>
                    <div>{message.times}</div>
                    
                  </div>
                </div>
                <div
                  className={`${styles["chat-message"]} ${
                    message.sender === "user"
                      ? styles["user-message"]
                      : styles["bot-message"]
                  }`}
                >
                  {message.text && <p style={{color:"#333333"}}>{message.text}</p>}
                  {message.image && (
                    <img
                      src={URL.createObjectURL(message.image)}
                      alt="Uploaded"
                      className={styles.imgChat}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chatBox}>
        <label className={styles["send-button"]} htmlFor="file-upload">
          <InsertPhotoOutlinedIcon />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          className={styles["file-input"]}
        />
        <input
          type="text"
          className={styles["chat-input"]}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="กรอกข้อความ"
        />

        <button className={styles["send-button"]} onClick={handleMessageSend}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Chat;
