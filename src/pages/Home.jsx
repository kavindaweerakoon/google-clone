import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left ">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="home__header--right">
          <a href="https://clone-5abc2.web.app/">Gmail</a>
          <Link to="/">Images</Link>
          <AppsIcon />
          <AccountCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google"
        />
        <div className="home__input--container">
          <Search/> 
          {/* 
          // If you pass in a boolean value to the hideButtons prop, it will hide the buttons
          */}
        </div>
      </div>
    </div>
  );
};

export default Home;
