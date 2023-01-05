import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
      <Link className="link" to="/message">
        Message
      </Link>

      <h1>Welcome to website</h1>
    </div>
  );
};

export default Home;
