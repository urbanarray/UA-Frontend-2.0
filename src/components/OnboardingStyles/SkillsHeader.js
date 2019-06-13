import styled from 'styled-components';

export const SkillsHeader = styled.div` 

text-align: center;
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0;

   h1 {
       font-size: 3.8vw;
       margin-right: 50px;
   }

   @media(max-width:770px) {
    h1{
        font-size: 5.5vw;

    }
}

`;