import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { DateTime } from "luxon";
import Card from "./Card";

const GetFLR = () => {
  const apiKey = "Ws5aXBYPbjbTjZRTDqv7yicPj8OctbwhhcGzHg0U";
  const [flrID, setFlrID] = useState("");
  const [classType, setClassType] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const localTodayDate = DateTime.local();
    const localTodayDateUTC = localTodayDate.toUTC();
    const formatTodayDateUTC = localTodayDateUTC.toFormat("yyyy-MM-dd");
    axios
      .get(
        `https://api.nasa.gov/DONKI/FLR?startDate=${formatTodayDateUTC}&endDate=${formatTodayDateUTC}&api_key=${apiKey}`
      )
      .then((response) => {
        setFlrID(response.data[0].flrID);
        setClassType(response.data[0].classType);
        setDate(formatTodayDateUTC);
      });
  }, []);

  return (
    <div className="mt-5 mb-5">
      <Card
        date={date}
        title="太陽フレアの状態"
        classType={classType}
        flrID={flrID}
      />
    </div>
  );
};

export default GetFLR;
