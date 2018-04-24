import React, { Component } from "react";

import CrackTimes from "./CrackTimes";
import Feedback from "./Feedback";

class Information extends Component {
  state = {
    crackTimes: []
  };

  componentWillReceiveProps(nextProps) {
    const { crack_times_display } = nextProps;
    const crackTimes = [
      crack_times_display.online_throttling_100_per_hour,
      crack_times_display.online_no_throttling_10_per_second,
      crack_times_display.offline_slow_hashing_1e4_per_second,
      crack_times_display.offline_fast_hashing_1e10_per_second
    ];
    if( !crackTimes[0]) return;
    this.setState({ crackTimes });
  }

  render() {
    const { crackTimes } = this.state;
    const { showingFeedback } = this.props;

    return (
      showingFeedback ? <Feedback /> : <CrackTimes crackTimes={ crackTimes } />
    );
  }
}

export default Information;
