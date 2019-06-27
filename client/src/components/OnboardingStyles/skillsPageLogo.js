import styled from 'styled-components';

export const SkillsLogo = styled.img`
`;
export const SkillsSearchBox = styled.div`
    display: block;
    max-width: 500px;
    margin:0 auto;
    height:50px;
    position:relative;

    i {
      position: absolute;
      right: 3px;
      top: 20px;
    }

    #search-text-input {
    border-top:thin solid  #e5e5e5;
    border-right:thin solid #e5e5e5;
    border-bottom:0;
    border-left:thin solid  #e5e5e5;
    box-shadow:0px 1px 1px 1px #e5e5e5;
    float:left;
    height:30px;
    margin:.8em 0 0 .5em;
    outline:0;
    padding:.4em 0 .4em .6em;
    width:100%;
}
img {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40px;
  height: 36px;

}
`;