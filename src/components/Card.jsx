import React from "react";
import Paper from "@material-ui/core/Paper";
import { FormControlLabel, Switch } from "@material-ui/core";

const Card = ({ value, title, time, format, setFormat }) => {
  return (
    <div className="d-flex py- justify-content-center">
      <Paper
        elevation={3}
        className="border border-dark py-3 px-3 py-1 rounded shadow shadow-sm w-100"
      >
        <div className="row">
          <div className="col-8 d-flex align-items-center">
            <p className="text-muted  m-0 p-0">{title}</p>
          </div>
          <div className="col-4 d-flex align-items-center">
            {time ? (
              <FormControlLabel
                control={
                  <Switch
                    checked={format === "24"}
                    onChange={(e) =>
                      setFormat(e.target.checked ? "24" : "12")
                    }
                    name="checkedA"
                  />
                }
                label={<small>24Hrs</small>}
              />
            ) : null}
          </div>
        </div>

        <hr />
        <h6 className="text-center">{value}</h6>
      </Paper>
    </div>
  );
};

export default Card;
