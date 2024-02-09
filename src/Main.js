import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navber from "./components/Navber";
import APOD from "./components/APOD";
import GetFLR from "./components/GetFLR";

const Main = () => {
  return (
    <React.Fragment>
      <Navber title="SUN station" />
      <GetFLR />
      <APOD />
      <hr className="mt-5" />
      <div className="ms-3 my-4">
        <p>
          このアプリケーションで使用している情報は全て NASA Open APIs
          から取得したものです。
        </p>
        <p>copyright (c) 2024 SUN station.</p>
      </div>
    </React.Fragment>
  );
};

export default Main;
