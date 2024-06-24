import { useState } from "react";
import { CiGift } from "react-icons/ci";
import { FaGithub, FaWpexplorer } from "react-icons/fa";
import { GoCodespaces, GoRepo } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosSearch, IoMdClose, IoMdGitPullRequest } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { VscGithubProject, VscIssues } from "react-icons/vsc";

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
          <p>Issues</p>
        </li>
        <li>
        <IoMdGitPullRequest />
          <p>Pull requests</p>
        </li>
        <li>
        <VscGithubProject />
          <p>Projects</p>
        </li>
        <li>
        <TiMessages />
          <p>Discissions</p>
        </li>
        <li>
        <GoCodespaces />
          <p>Codespaces</p>
        </li>

        <hr />
        <li>
        <FaWpexplorer />
          <p>Explore</p>
        </li>
        <li>
        <CiGift />
          <p>Marketplace</p>
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
