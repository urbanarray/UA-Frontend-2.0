import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';

import colorlogo from '../assets/images/colorlogo.png';
import image1 from '../assets/images/stockImage1.jpg';
import image2 from '../assets/images/stockImage2.jpg';
import icon1 from '../assets/images/001-study.svg';
import icon2 from '../assets/images/002-network.svg';
import icon3 from '../assets/images/003-social-care.svg';
import { LandingPageLogo } from '../components/OnboardingStyles/LandingPageLogo';
import { CardHolder, GreenCard} from '../components/OnboardingStyles/CardHolder';
import { ProjectContainer, ProjectImage, ProjectTextContainer } from '../components/OnboardingStyles/ProjectContainer';
import SocialIconContainer from '../components/SocialIconContainer';

const GetInvolvedBtn = styled.button`
    margin-top: 5vh;
    margin-left: 42%;
    margin-right: 50%;
    background-color: #4a99cb;
    color: white;
    width: 16vw;
    height: 7vh;
    font-size: 1.5em;
`;

const LandingPage = () => {
    return (
        <div>
            <LandingPageLogo src={colorlogo} />


            <Row style={{ textAlign: 'center' }}>
                <h1>Welcome to Urban Array&apos;s Volunteer Platform</h1>
                <h3 style={{ marginBottom: '10vh' }}>Build yourself, grow your community</h3>

                <iframe width="784" height="441" title="UA-teaser" src="https://www.youtube.com/embed/k15z2UuCnDQ" frameBorder="0" allowFullScreen></iframe>
            </Row>

            <h3 style={{ marginBottom: '5vh', textAlign: 'center', marginTop: '10vh' }}>Current Projects</h3>

            <CardHolder>
                <ProjectContainer>
                    <ProjectImage>
                        <img src={image1} style={{ marginLeft: '-6vw', height: '100%'}} alt="UA-project 1"/>
                    </ProjectImage>
                    <ProjectTextContainer>
                        <h4>Housing Project on 63rd</h4>
                        <p className="project-description">Urban Array is working on renovating a block of buildings in the beautiful, historic neighborhood of Englewood. Members are encouraged to come and help out!</p> <br />
                        <Link to="/get-involved" className="learn-more-projects"> Learn More </Link>
                    </ProjectTextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ProjectImage>
                        <img src={image2} style={{ height: '100%', marginLeft: '-9vw' }} alt="UA-project 2"/>
                    </ProjectImage>
                    <ProjectTextContainer>
                        <h4>Urban Garden on 97th</h4>
                        <p className="project-description"> Community members broke soil at the beginning of June. Local community members will enjoy kale, tomatoes, beets, and potatoes at the end of the summer. Spare hands welcome.</p>
                        <Link to="/get-involved" className="learn-more-projects"> Learn More </Link>
                    </ProjectTextContainer>
                </ProjectContainer>
            </CardHolder>


            <Link to="/get-involved">
                <GetInvolvedBtn>Get Involved</GetInvolvedBtn>
            </Link>

            <h3 style={{ marginBottom: '5vh', textAlign: 'center', marginTop: '10vh' }}>Our Mission</h3>
            <Link to="/get-involved" style={{ float: 'right', marginTop: '-8vh', marginRight: '10vw', textDecoration: 'none' }}>Learn More</Link>

            <CardHolder>
                <GreenCard>
                    <img src={icon1} style={{ height: '6vw', marginTop: '3vh', marginLeft: 'auto', marginRight: "auto", opacity: '0.9'}} alt="education"/>
                    <h4>Education, Training, and Information</h4>
                    <p>Urban Array provides skills building and hands-on training for members.</p>
                </GreenCard>
                <GreenCard>
                    <img src={icon2} style={{ height: '6vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '3vh', opacity: '0.9'}} alt="economic participation"/>
                    <h4>Members&apos; Economic Participation</h4>
                    <p>Members&apos; participation is key. The benefits match the amount of effort.</p>
                </GreenCard>
                <GreenCard>
                    <img src={icon3} style={{ height: '6vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '3vh', opacity: '0.9'}} alt="community"/>
                    <h4>Concern for Community</h4>
                    <p>Members help make decisions on sustainable development in their own community.</p>
                </GreenCard>
            </CardHolder>

            <SocialIconContainer />

        </div>

    )
}

export default LandingPage;