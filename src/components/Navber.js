import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navber = (props) => {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">{props.title}</span>
      </div>
    </nav>
  );
};

export default Navber;
