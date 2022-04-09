import React from "react";
import "./SearchResults.css";
import { useStateValue } from "../components/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();

 // const data = response; // mock API call

  const {data} = useGoogleSearch(term); // real API call
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google"
            className="searchPage__logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons term={term}/>
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for "{term}"
          </p>

            {data?.items.map((item) => (
                <div className="searchPage__result">
                    <a className="searchPage__resultLink" href={item.link}> 
                    {item && item.pagemap?.cse_image?.length > 0 && ( 
                        <img className="searchPage__resultImage" src={item.pagemap.cse_image[0].src} alt=""/>
                    )}
                    
                    {item.displayLink} ▽
                    </a>
                    <a className="searchPage__resultTitle" href={item.link}>
                    <h2>{item.title}</h2>
                    </a>
                    <p className="searchPage__resultSnippet">{item.snippet}</p>
                  </div>

            ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
