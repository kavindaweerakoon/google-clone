import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false, term }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  function search(e) {
    e.preventDefault(); // prevent the form from reloading the page
    
  

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });

    navigate("/search");
  }

  // having this part inside a form tag and having the button type submit you can avoid all of the extra code needed to code the press enter to submit functionality!
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        {/* 
                // setting value to input state will maintain the value of the input field 
                */}
        <input value={!input ? term : input } onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons--hidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
