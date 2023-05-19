import React from "react";
import axios from "axios";
import { useNavigate }  from "react-router-dom";


const HomePage = (props: {}) => {
  const navigate = useNavigate();

  const testModel = () => {
    const asyncFun = async () => {
      await axios.post( "http://localhost:8080" + '/challenge/testChallenge', {  } );
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  return (
    <div className={"home"}>
      I have nothing~
      <div className={"button"} onClick={(e) => testModel()}>test</div>
    </div>
  )
};

export default HomePage;