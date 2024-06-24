import { useState } from "react";
import { FaBars, FaGithub, FaPlus } from "react-icons/fa";
import { GoCommandPalette, GoRepo } from "react-icons/go";
import { IoIosSearch, IoMdGitPullRequest } from "react-icons/io";
import { MdOutlineArrowDropDown, MdOutlineMarkAsUnread } from "react-icons/md";
import { VscIssues } from "react-icons/vsc";
import swal from "sweetalert";
import MenuBar from "./MenuBar";

const Header = ({calluser}) => {
  const [searchActive, setActiveSearch] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const[menuActive,setMenuAcitve]=useState(false)
  if(menuActive=="active"){
    document.body.style.overflow="hidden"


  }else{
    document.body.style.overflow="auto"
  }
  const searchSubmit = (e) => {
    e.preventDefault();

    calluser(inputValue)
    if (!inputValue) {
      swal("Please Fill Input","","warning");
    } else {
      if (searchActive == true) {
        setActiveSearch(false);
      }
    }
  };

  return (
    <>
      <nav>
        <MenuBar active={menuActive} setMenuAcitve={setMenuAcitve}/>
        
        <div className="container-fluid">
          <div className="nav-con dp-between">
            <div className="nav-left dp-align">
              <div onClick={()=>setMenuAcitve("active")} className="bar-con">
                <FaBars className="bar-icon" />
              </div>
              <a href="">
                <FaGithub className="git-icon" />
              </a>
              <p>Dashboard</p>
            </div>
            <div className="nav-right dp-align">
              <div className="search-section">
                <div
                  className="search-con dp-align"
                  onClick={() => setActiveSearch(true)}
                >
                  <div className="search-text dp-align">
                    <IoIosSearch className="search-icon" />
                    <p>Type / to search</p>
                  </div>
                  <GoCommandPalette className="icon"/>
                </div>
                <div
                  className={
                    searchActive == true
                      ? "search-container zi-1"
                      : "search-container"
                  }
                  onClick={() => setActiveSearch(false)}
                ></div>
                <div className={searchActive == false ? "dp-none" : "search"}>
                  <div className="search-block">
                    <form onSubmit={searchSubmit} action="#">
                      <IoIosSearch className="search-icon" />
                      <input
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                      />
                      <button className="rp-btn d-none btn " type="submit">Search</button>
                    </form>
                    <ul>
                      <li>Owners</li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User1</p>
                        <p>Jump to</p>
                      </li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User2</p>
                        <p>Jump to</p>
                      </li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User3</p>
                        <p>Jump to</p>
                      </li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User4</p>
                        <p>Jump to</p>
                      </li>
                    </ul>
                    <hr />

                    <ul>
                      <li>Repositories</li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User1</p>
                        <p>Jump to</p>
                      </li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User2</p>
                        <p>Jump to</p>
                      </li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User3</p>
                        <p>Jump to</p>
                      </li>
                      <li className="dp-between">
                        <p className="dp-align gap-2"><GoRepo className="icon" /> User4</p>
                        <p>Jump to</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="icons-section dp-align">
                <div className="plus-con dp-align">
                  <FaPlus className="icon" />
                  <MdOutlineArrowDropDown className="icon" />
                </div>
                <div className="round-con dp-align">
                  <VscIssues className="round-icon" />
                </div>
                <div className="arrow-con dp-align">
                  <IoMdGitPullRequest />
                </div>
                <div className="dp-align">
                  <MdOutlineMarkAsUnread />
                </div>
                <div className="logo">
                  <img
                    src="https://avatars.githubusercontent.com/u/142162039?v=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
