import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SmallLogo } from "../components/OnboardingStyles/LandingPageLogo";
import ProgressBar from "../components/OnboardingStyles/ProgressBar";

import colorlogo from "../assets/images/colorlogo.png";
import meetMember from "../assets/images/006-interview.svg";
import { CardHolder } from "../components/OnboardingStyles/CardHolder";
import { OnboardingButton } from "../components/OnboardingStyles/OnboardingButtons";

import InterviewModal from "../components/InterviewModal";
import { ModalProvider } from "styled-react-modal";

class MemberInterview extends Component {
  render() {
    return (
      <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <SmallLogo src={colorlogo} />
        <ProgressBar currentStep={2} />
        <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
          <CardHolder>
            <h1 style={{ textAlign: "center", margin: "auto", padding: "1vh" }}>
              Meet with a Member
            </h1>
            <img
              src={meetMember}
              style={{ height: "10vh", margin: "auto", padding: "4vh" }}
              alt="meet a member"
            />
          </CardHolder>
          <p>
            Thanks for taking the time to fill out your information! You're
            almost there.
          </p>
          <CardHolder>
            <div>
              <h4>Ready to take the next step?</h4>
              <ModalProvider>
                <InterviewModal />
              </ModalProvider>
            </div>
            <div>
              <h4>Not quite ready yet?</h4>
              <Link to="/dashboard">
                <OnboardingButton
                  style={{
                    fontSize: "1em",
                    padding: "1vh",
                    backgroundColor: "#4a99cb"
                  }}
                >
                  Continue to Dashboard
                </OnboardingButton>
              </Link>
            </div>
          </CardHolder>
        </div>
      </div>
    );
  }
}

export default MemberInterview;
