import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    width: 35vw;
    height: 35vh;
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
`;

export const ProjectImage = styled.div`
    display: inline;
    width: 35%;
    height: 100%;
    border: 1px solid black;
    border-radius: 15px 0 0 15px;
    overflow: hidden;
`;

export const ProjectTextContainer = styled.div`
    width: 65%;
    h4 {
        margin-top: 3vh;
    }
    .learn-more-projects {
        text-align: right;
        float: right;
        margin-right: 1vw;
    }
    .project-description {
        text-align: left;
        padding-left: 1vw;
        padding-right: 1vw;
    }
`;