import React from "react";
import { CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <CircularProgress />
    </div>
  );
}

export default Spinner;
