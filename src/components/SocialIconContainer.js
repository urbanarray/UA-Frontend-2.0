import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const SocialIconHolder = styled.div`
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

const SocialIconContainer = () => (
    <SocialIconHolder>
        Follow us and check out what's happening in your community: &nbsp;
        <SocialIcon className="social-icons" url="https://www.facebook.com/urbanarray/" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon className="social-icons" url="https://twitter.com/urbanarray" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon className="social-icons" url="https://www.instagram.com/urbanarray/" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon className="social-icons" url="https://www.linkedin.com/company/urban-array/" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon className="social-icons" url="https://www.youtube.com/channel/UCicgBg_6lVqWBgqkur2S9vg" target="_blank" rel="noopener noreferrer"/>
    </SocialIconHolder>
)

export default SocialIconContainer;

