import React from "react";
import axios from "axios";
import { useNavigate }  from "react-router-dom";


const HomePage = (props: {}) => {
  const navigate = useNavigate();

  return (
    <div className={"home"}>
      I have nothing~
    </div>
  )
};

export default HomePage;