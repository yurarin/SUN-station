/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Card.css";
import sun from "bootstrap-icons/icons/sun-fill.svg";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="ms-3 my-4">
        <img width="33" src={sun} />
        <h4 className="mt-4">
          <b>{props.title}</b>
        </h4>
      </div>
      <div class="card shadow rounded-4">
        <div class="card-body">
          <blockquote class="blockquote m-4">
            <p className="mb-4 sm">UTC: {props.date}</p>
            <h1>
              <b>{props.classType}</b>
            </h1>
            <footer class="blockquote-footer mt-4">
              FLR ID: {props.flrID}
            </footer>
          </blockquote>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
