import React, { Component } from "react";

// Components
import CrackTimes from "../CrackTimes/index";
import Feedback from "../Feedback/index";

// Styles
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  perspective: 800px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: ${props => props.showingFeedback ? 'rotateX( 180deg )' : null };
`;

const Information = ({ showingFeedback, feedback, crack_times_display }) => (
  showingFeedback ? <Feedback feedback={feedback} /> : <CrackTimes rawCrackTimes={crack_times_display} />
);

export default Information;
