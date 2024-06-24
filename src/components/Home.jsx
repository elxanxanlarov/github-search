import { GoRepo } from "react-icons/go";
import SingleCard from "./SingleCard";
import swal from "sweetalert";
import { useEffect } from "react";

const Home = ({ getData, h1show }) => {
  return (
    <>
      <section className="home">
        {
          useEffect(()=>{
            <div className="alert x">
          {swal("You can search user","","warning")}
        </div>
          },[])
        }
        <div className="container-fluid">
          <div className="home-con">
            <div className="left-main dp-align">
              <div className="home-left">
                <ul className="reposity-ul">
                  <li className="dp-between">
                    <p>Top Repositories</p>
                    <button className="btn btn-success">
                      <GoRepo className="icon" />
                      New
                    </button>
                  </li>
                  <li>
                    <input type="text" placeholder="Find a reposity..." />
                  </li>
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
                  <li>
                    <span>Recent activity</span>
                    <p>
                      When you take actions across GitHub, we’ll provide links
                      to that activity here.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="main-right-con dp-align">
                <div className=" home-main dp-align">
                  {getData.length === 0 ? (
                    <h1 className={`${h1show} w-100 text-center text-danger`}>
                      No Result
                    </h1>
                  ) : (
                    getData.map((item) => (
                      <SingleCard key={item.id} alldata={item} />
                    ))
                  )}
                </div>
                <div className="home-right">
                  <ul>
                    <li>Latest changes</li>
                    <li>
                      <div>
                        <span>3 days ago</span>
                        <p>Introducing Copilot Extensions: everything you need to know to get started</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>3 days ago</span>
                        <p>Introducing Copilot Extensions: everything you need to know to get started</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>3 days ago</span>
                        <p>Introducing Copilot Extensions: everything you need to know to get started</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>3 days ago</span>
                        <p>Introducing Copilot Extensions: everything you need to know to get started</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
