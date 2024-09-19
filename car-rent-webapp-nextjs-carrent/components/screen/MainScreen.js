// components/MainScreen.js
import React,{useState} from "react";
import icon from '../assets/icon.png'
import Image from "next/image";

const MainScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
    
        // Add your authentication logic here (e.g., API call or validation)
      };
    
  const ScreenStyle = {
    background: "linear-gradient(to bottom, #0068f9, #00347d)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
  };
  const iconStyle = {
    width: "125px",
    height: "auto",
    filter: 'invert(100%)',
    marginBottom:"-40px"
  };

  const formStyle = {
    width: '300px',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  return (
    <div className="main-screen" style={ScreenStyle}>
      <h1 style={{fontFamily:"Prompt",fontSize:"20px",fontWeight:"inherit"}}>main</h1>
    </div>
  );
};

export default MainScreen;
