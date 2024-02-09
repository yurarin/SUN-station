/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./APOD.css";
import image from "bootstrap-icons/icons/image.svg";

const APOD = () => {
  const apiKey = "Ws5aXBYPbjbTjZRTDqv7yicPj8OctbwhhcGzHg0U";
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [copyright, setCopyright] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        setImgUrl(response.data.url);
        setTitle(response.data.title);
        setCopyright(response.data.copyright);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="ms-3 my-4">
        <h5 className="mb-3">
          <img width="30" src={image} />
        </h5>
        <h4>
          <b>{title}</b>
        </h4>
        <p>by {copyright}</p>
      </div>
      <div class="shadow-lg rounded-4">
        <img class="apod-img" src={imgUrl} />
      </div>
    </React.Fragment>
  );
};

export default APOD;
