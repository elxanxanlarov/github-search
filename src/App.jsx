import { useState } from "react";
import Header from "./components/Header";
// import Search from './components/Search'
// import Users from './components/Users'
import "./App.css";
import axios from "axios";
import Home from "./components/Home";

const App = () => {
  const [userData, setUserdata] = useState([]);
  const [show,setShow]=useState('d-none')
  const searchSubmit = (inputvalue) => {
    axios.get(`https://api.github.com/search/users?q=${inputvalue}`)
    .then((res) => setUserdata(res.data.items));
    setShow("d-block")
  };
  return (
    <div>
      <Header calluser={searchSubmit}/>
       <Home getData={userData} h1show={show}/>
    </div>
  );
};

export default App;
