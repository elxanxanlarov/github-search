import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";

const MenuBar = ({active,setMenuAcitve}) => {
  return (
    <div className={`menu-bar ${active}  `}>
      <div className="head dp-between">
        <div className="logo">
          <FaGithub className="git-icon" />
        </div>
        <div onClick={()=>setMenuAcitve(false)} className="close-btn cursor">
          <IoMdClose />
        </div>
      </div>
      <ul>
        <li>
          <GrHomeRounded />
          <p>Home</p>
        </li>
        <li>
          <VscIssues />
          <p>Home</p>
        </li>
        <li>
          <VscIssues />
          <p>Home</p>
        </li>
        <li>
          <VscIssues />
          <p>Home</p>
        </li>
        <li>
          <VscIssues />
          <p>Home</p>
        </li>
        <li>
          <VscIssues />
          <p>Home</p>
        </li>

        <hr />
        <li>
          <VscIssues />
          <p>Home</p>
        </li>
        <li>
          <VscIssues />
          <p>Home</p>
        </li>
      </ul>
      <div className="head-two dp-between">
        <p>Repositories</p>
        <IoIosSearch className="search-icon" />
      </div>
      <ul className="reposity-ul">
        <li className="repo dp-align">
          <div className="img-con">
            <img
              src="https://avatars.githubusercontent.com/u/142162039?v=4"
              alt=""
            />
          </div>
          <p>user/portfolio</p>
        </li>
        <li className="repo dp-align">
          <div className="img-con">
            <img
              src="https://avatars.githubusercontent.com/u/142162039?v=4"
              alt=""
            />
          </div>
          <p>user/github-project</p>
        </li>
        <li className="repo dp-align">
          <div className="img-con">
            <img
              src="https://avatars.githubusercontent.com/u/142162039?v=4"
              alt=""
            />
          </div>
          <p>user/todo-list</p>
        </li>
        <li className="repo dp-align">
          <div className="img-con">
            <img
              src="https://avatars.githubusercontent.com/u/142162039?v=4"
              alt=""
            />
          </div>
          <p>user/countries-project</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
