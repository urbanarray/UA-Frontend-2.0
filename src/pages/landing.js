import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { colors } from '../assets/styles/variables/index';
import colorlogo from '../assets/images/colorlogo.png';
import image1 from '../assets/images/stockImage1.jpg';
import image2 from '../assets/images/stockImage2.jpg';
import icon1 from '../assets/images/001-study.svg';
import icon2 from '../assets/images/002-network.svg';
import icon3 from '../assets/images/003-social-care.svg';
import { LandingPageLogo } from '../components/OnboardingStyles/LandingPageLogo';
import { CardHolder, GreenCard} from '../components/OnboardingStyles/CardHolder';
import { ProjectContainer, ProjectImage, ProjectTextContainer } from '../components/OnboardingStyles/ProjectContainer';

const Header = styled.header`
    text-align: center;
`;

const ExternalNav = styled.div`
    display: inline;
    float: right;
    padding-right: 2vw;
    margin-top: 0;
    margin-left: 0;
    clear: both;
    display: table;
`;

const GetInvolvedBtn = styled.button`
    margin-top: 5vh;
    margin-left: 42%;
    margin-right: 50%;
    background-color: #4a99cb;
    color: white;
    width: 16vw;
    height: 7vh;
    font-size: 1.5em;
    /* border-radius: 10px; */
`;

const SocialIconContainer = styled.div`
    margin-top: 10vh;
    background-color: #80cafe;
    width: 90%;
    border-radius: 15px;
    margin: 0 auto;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 3vh;
    font-weight: bold;
    font-size: 1.3em;
    .social-icons {
        background-color: white;
        border-radius: 50%;
    }
`;

const LandingPage = () => {
    return (
        <div>
                <ExternalNav>
                    <a href="https://urbanarray.org/donate/" target="_blank" rel="noopener noreferrer">
                        <Button style={{height: '6vh', fontSize: '1em', color: 'white', backgroundColor: '#4a99cb'}} size="large">Donate</Button>
                    </a>
                    <Link to="/get-involved">
                        <Button style={{height: '6vh', fontSize: '1em', color: 'white', backgroundColor: '#91c63f'}} size="large">Get Involved</Button>
                    </Link>
                    <Link to="/signup">
                        <Button style={{ height: '6vh', fontSize: '1em', color: 'white', backgroundColor: '#80cafe'}} size="large">Sign In</Button>
                    </Link>
                    <br />
                    <LandingPageLogo src={colorlogo} />
                </ExternalNav>

            <Row style={{ textAlign: 'center' }}>
                <h1>Welcome to Urban Array's Volunteer Platform</h1>
                <h3 style={{ marginBottom: '10vh' }}>Build yourself, grow your community</h3>

                <iframe width="784" height="441" src="https://www.youtube.com/embed/k15z2UuCnDQ" frameBorder="0" allowFullScreen></iframe>
            </Row>

            <h3 style={{ marginBottom: '5vh', textAlign: 'center', marginTop: '10vh' }}>Current Projects</h3>

            <CardHolder>
                <ProjectContainer>
                    <ProjectImage>
                        <img src={image1} style={{ marginLeft: '-6vw', height: '100%'}} />
                    </ProjectImage>
                    <ProjectTextContainer>
                        <h4>Housing Project on 63rd</h4>
                        <p className="project-description">Urban Array is working on renovating a block of buildings in the beautiful, historic neighborhood of Englewood. Members are encouraged to come and help out!</p> <br />
                        <a className="learn-more-projects"> Learn More </a>
                    </ProjectTextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ProjectImage>
                        <img src={image2} style={{ height: '100%', marginLeft: '-9vw' }} />
                    </ProjectImage>
                    <ProjectTextContainer>
                        <h4>Urban Garden on 97th</h4>
                        <p className="project-description"> Community members broke soil at the beginning of June. Local community members will enjoy kale, tomatoes, beets, and potatoes at the end of the summer. Spare hands welcome.</p>
                        <a className="learn-more-projects"> Learn More </a>
                    </ProjectTextContainer>
                </ProjectContainer>
            </CardHolder>


            <Link to="/get-involved">
                <GetInvolvedBtn>Get Involved</GetInvolvedBtn>
            </Link>

            <h3 style={{ marginBottom: '5vh', textAlign: 'center', marginTop: '10vh' }}>Our Mission</h3>
            <a style={{ float: 'right', marginTop: '-8vh', marginRight: '10vw'}}>Learn More</a>

            <CardHolder>
                <GreenCard>
                    <img src={icon1} style={{ height: '6vw', marginTop: '3vh', marginLeft: 'auto', marginRight: "auto", opacity: '0.9'}} />
                    <h4>Education, Training, and Information</h4>
                    <p>Urban Array provides skills building and hands-on training for members.</p>
                </GreenCard>
                <GreenCard>
                    <img src={icon2} style={{ height: '6vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '3vh', opacity: '0.9'}} />
                    <h4>Members' Economic Participation</h4>
                    <p>Members' participation is key. The benefits match the amount of effort.</p>
                </GreenCard>
                <GreenCard>
                    <img src={icon3} style={{ height: '6vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '3vh', opacity: '0.9'}} />
                    <h4>Concern for Community</h4>
                    <p>Members help make decisions on sustainable development in their own community.</p>
                </GreenCard>
            </CardHolder>

            <SocialIconContainer>
                Follow us and check out what's happening in your community: &nbsp;
                <SocialIcon className="social-icons" url="https://www.facebook.com/urbanarray/" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon className="social-icons" url="https://twitter.com/urbanarray" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon className="social-icons" url="https://www.instagram.com/urbanarray/" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon className="social-icons" url="https://www.linkedin.com/company/urban-array/" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon className="social-icons" url="https://www.youtube.com/channel/UCicgBg_6lVqWBgqkur2S9vg" target="_blank" rel="noopener noreferrer"/>
            </SocialIconContainer>

        </div>

    )
}

export default LandingPage;