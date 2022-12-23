import React, { Component } from "react";
import DailyCheckUpA from "./DailyCheckUpA";
import DailyCheckUpB from "./DailyCheckUpB";
import DailyCheckUpC from "./DailyCheckUpC";
import DailyCheckUpD from "./DailyCheckUpD";
import DailyCheckUpE from "./DailyCheckUpE";
export default class CheckUp extends Component {
  state = {
    step: 1,
    checkA: 0,
    checkB: 0,
    checkC: 0,
    checkD: "",
    checkE: "",
  };
  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { checkA, checkB, checkC, checkD, checkE } = this.state;
    const values = { checkA, checkB, checkC, checkD, checkE };

    switch (step) {
      case 1:
        return <DailyCheckUpA nextStep={this.nextStep} values={values} />;
      case 2:
        return (
          <DailyCheckUpB
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <DailyCheckUpC
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return (
          <DailyCheckUpD
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 5:
        return <DailyCheckUpE values={values} prevStep={this.prevStep} />;
      default:
    }
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
