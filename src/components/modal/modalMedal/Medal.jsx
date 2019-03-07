import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import MedalObjective from "../../../assets/svgs/medal-objective.svg";
import MedalKR from "../../../assets/svgs/medal_KR.svg";
import MedalCycle from "../../../assets/svgs/medal_cycle.svg";
import MedalGeneric from "../../../assets/svgs/Asset 29.svg";

class Medal extends PureComponent {
  // Props
  static propTypes = {
    medalName: PropTypes.string.isRequired
  };

  render() {
    const { medalSrc } = this.props;
    return (
      <img alt="ESta madara" src={medalSrc} />
    );
  }
}

export default Medal;
