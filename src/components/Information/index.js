import React, { Component } from "react";

//Components
import CrackTimes from "../CrackTimes/index";
import Feedback from "../Feedback/index";

const Information = ({ showingFeedback, feedback, crack_times_display }) => (
  showingFeedback ? <Feedback feedback={feedback} /> : <CrackTimes rawCrackTimes={crack_times_display} />
);

export default Information;
