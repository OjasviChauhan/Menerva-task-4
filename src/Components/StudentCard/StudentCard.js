import React from "react";

import CreateIcon from "@material-ui/icons/Create";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

import "./StudentCard.css";
import { Button } from "@material-ui/core";
import StudentProgress from "../StudentProgress/StudentProgress";

function StudentCard() {
  return (
    <div className="card">
      {/* 10marks */}
      <div className="card__first">
        <div className="card__batch">
          <p>Batch Name | PHY_B1</p>
          <CreateIcon style={{ color: "#2e2e2e" }} />
        </div>

        <div className="card__name">
          <img src="/images/person.png" alt="" />
          <p>Ojasvi Chauhan</p>
          <GroupAddIcon
            style={{
              marginLeft: "auto",
              marginRight: "18px",
              fontSize: "30px",
              color: "#2e2e2e",
            }}
          />
        </div>

        <div className="card__students">
          <AccountCircleIcon style={{ color: "#2e2e2e" }} />
          <p>125 Students</p>
        </div>

        <div className="card__upcoming">
          <WatchLaterIcon style={{ color: "#2e2e2e" }} />

          <p>
            <span style={{ fontWeight: "normal" }}>
              Upcoming {"<Activity>"} <br />
              Thu, 25th May <br />
            </span>
            12:00 PM - 12:00 PM
          </p>

          <Button
            variant="outlined"
            color="primary"
            style={{
              height: "30px",
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
              border: "2px solid",
              textTransform: "capitalize",
              marginLeft: "auto",
              marginRight: "27px",
            }}
          >
            View
          </Button>
        </div>
      </div>

      {/* 50marks */}
      <div>
        <StudentProgress />
      </div>
    </div>
  );
}

export default StudentCard;
