import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactStars from "react-rating-stars-component";

import "./StudentProgress.css";

const percentage = 90;

function StudentProgress() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="progress">
      {/* Attendance */}
      <div className="progress__attendance">
        <p className="progress__heading">Attendance</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className="progress__info">
          Last absence <br />
          12th May, 12:00 PM
        </p>
      </div>

      <div className="progress__tests">
        <p className="progress__heading">Tests</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className="progress__info">
          Last Test <br /> 100 %
        </p>
      </div>

      <div className="progress__rating">
        <p className="progress__heading">HW Rating</p>

        <div className="progress__stars">
          <ReactStars
            value={4.1}
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            activeColor="#EFD75B"
          />
          <p className="progress__rating">(4.1)</p>
          <p className="progress__info">
            Last Homework <br />
            4.5
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentProgress;
