import './App.css';
import {react, useEffect, useState} from 'react'
import axios from "axios";
function mvtApp() {
 
// sử dụng hàm useStte

const[mvtSL,setmvcstudentlist] = useState([]);
//api
const mvtGetstudenlist = async () => {
  try {
  const response = await axios.get("https://666a99ff7013419182cffec8.mockapi.io/api/mvtv1/mvtstudent");
  setmvcstudentlist(response.data);
  } catch (error) {
  console.error("Error fetching data:", error);
  }
  };
  useEffect(() =>{
    mvtGetstudenlist();
  },[]);
  return (
    <div className="container borde MT-5">
      <h1>sử lí chức lăng với CRUD - HOOK-API</h1>
      <hr/>
    <mvtSL rendermvtSL = {mvtSL}/>
    </div>
  );
}

export default mvtApp;
