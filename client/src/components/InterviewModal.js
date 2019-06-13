import React, { Component } from "react";
import Modal from "styled-react-modal";

import { OnboardingButton } from "./OnboardingStyles/OnboardingButtons";
import meetMember from "../assets/images/006-interview.svg";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 25rem;
  padding: 1rem;
  display: grid;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;

class InterviewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  afterOpen() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    });
  }

  beforeClose() {
    return new Promise(resolve => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 200);
    });
  }

  render() {
    return (
      <div>
        <OnboardingButton
          style={{
            backgroundColor: "#91c63f"
          }}
          onClick={this.toggleModal}
        >
          Meet a member
        </OnboardingButton>
        <StyledModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
          backgroundProps={{ opacity: this.state.opacity }}
        >
          <span
            onClick={this.toggleModal}
            style={{
              textAlign: "right"
            }}
          >
            X
          </span>
          <h1>Book a time</h1>
          <p>
            Sign up for your in-person meeting to get to know more about Urban
            Array and see if we're a good fit for each other. Book a convenient
            time for you.
          </p>
          <img
            src={meetMember}
            style={{
              height: "7vh",
              width: "7vw",
              margin: "auto",
              padding: "4vh"
            }}
            alt="meet a member"
          />
          <OnboardingButton
            style={{
              margin: "auto",
              backgroundColor: "#91c63f"
            }}
            onClick={this.toggleModal}
          >
            Coming Soon
          </OnboardingButton>
        </StyledModal>
      </div>
    );
  }
}
export default InterviewModal;
