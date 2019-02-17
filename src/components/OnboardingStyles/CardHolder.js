import styled from 'styled-components';

export const CardHolder = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    text-align: center;
`;

export const GreenCard = styled.div`
    width: 25vw;
    height: 32vh;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    background-color: #c4f970;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5vh; 
    h4 {
        text-align: center;
        margin-top: 3vh;
    }
    p {
        padding-left: 2vw;
        padding-right: 2vw;
    }
`;
