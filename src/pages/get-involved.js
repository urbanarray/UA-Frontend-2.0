import React from 'react';
import { Link } from 'react-router-dom';

import { SmallLogo } from '../components/OnboardingStyles/LandingPageLogo';
import ProgressBar from '../components/OnboardingStyles/ProgressBar';
import { CardHolder, ThreeStepCard, ThreeStepNavContainer } from '../components/OnboardingStyles/CardHolder';
import { OnboardingButton } from '../components/OnboardingStyles/OnboardingButtons';
import SocialIconContainer from '../components/SocialIconContainer';

import colorlogo from '../assets/images/colorlogo.png';
import signupIcon from '../assets/images/004-connection.svg';
import selectSkillsIcon from '../assets/images/005-skills.svg';
import meetMember from '../assets/images/006-interview.svg';

const GetInvolved = () => {
    return (
        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
            <SmallLogo src={colorlogo} />
            <ProgressBar currentStep={1} />
            <div style={{ textAlign: 'center' }}>
                <h1>Get Involved in Three Steps</h1>
                <h3>Before viewing the opportunities in your community, complete the following steps: </h3>
                <CardHolder>
                    <ThreeStepCard>
                        <h3>First Step</h3>
                        <img src={signupIcon} style={{ height: '10vh', width: 'auto', marginBottom: '1vh' }} alt="signup"/>
                        <h4>Sign Up</h4>
                        <p>Let's get this process started by entering in some basic information.</p>
                    </ThreeStepCard>
                    <ThreeStepCard>
                        <h3>Second Step</h3>
                        <img src={selectSkillsIcon} style={{ height: '10vh', width: 'auto', marginBottom: '1vh' }} alt="select skills" />
                        <h4>Select Skills</h4>
                        <p>Everybody has skills they can offer or want to learn! Tell us how we can help you gain skills and contribute to your community.</p>
                    </ThreeStepCard>
                    <ThreeStepCard>
                        <h3>Third Step</h3>
                        <img src={meetMember} style={{ height: '10vh', width: 'auto', marginBottom: '1vh'}} alt="meet a member"/>
                        <h4>Interview with a Member</h4>
                        <p>We want to ensure that we're a good fit for each other. We hope that we can help you and your community.</p>
                    </ThreeStepCard> 
                </CardHolder>

                <ThreeStepNavContainer>
                    <Link to="/welcome"><OnboardingButton style={{ backgroundColor: '#4a99cb' }}>Back</OnboardingButton></Link>
                    <Link to="/signup"><OnboardingButton style={{ backgroundColor: '#91c63f' }}>Sign Up</OnboardingButton></Link>
                </ThreeStepNavContainer>
                

                <SocialIconContainer />
            </div>

        </div>
    )
}

export default GetInvolved;