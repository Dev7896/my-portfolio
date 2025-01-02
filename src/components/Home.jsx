import author from "../assets/rahul_acharya.jpg";
import "../styles/Home.css";
import { useState, useEffect } from "react";

export default function Home() {
  const roles = [
    "Youtuber",
    "Fullstack Developer",
    "Backend Developer",
    "Singer",
    "Writer",
  ]; // Array of roles
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    // Rotate through the roles every 2 seconds
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="section1">
      <img className="first-image" src={author} alt="author image" />
      <article className="wrapper">
        <p className="regular-text">Hello I'm</p>
        <h1 className="heading">rahul acharya</h1>
        {/* Rotating text */}
        <p className="change regular-text">
          <span className="animated-text">{roles[currentRole]}</span>
        </p>
        <div className="btn-group">
          <button>download cv</button>
          <button>contact info</button>
        </div>
        <div className="social-icons">
          <i className="ri-linkedin-box-fill ri-2x"></i>
          <i className="ri-github-fill ri-2x"></i>
        </div>
      </article>
    </div>
  );
}
