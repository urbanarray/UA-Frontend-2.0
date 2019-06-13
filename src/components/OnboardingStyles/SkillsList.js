import React, { Component } from 'react';
import styled from 'styled-components';

 const SkillsListItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 20px;

    .skill-item-box{
        height: 100px;
        background-color: white;
        border: 1px solid black;
        flex-basis: 263px;
        margin: 30px;
        line-height:50px;
        border-radius: 21px;
    }

    .skill-item-box > span {
        font-weight: bold;
        font-size: 20px;
        background-color: #00f3ff;
        border-top-left-radius: 19px;
        border-top-right-radius: 19px;
    }
    
    .skill-item-box .skill-icons {
        position:relative;
    }
   
    .skill-item-box .skill-icons span.icon-left::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f004";
        padding:0 10px;
    }
    
    .skill-item-box .skill-icons span.icon-right::after {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f00c";
        padding:0 10px;
    }
    
    .skill-item-box .skill-icons span:first-child {
        	position:relative;
    } 
 /*    .skill-item-box .skill-icons span:first-child:after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            border-left: 3px solid #060606;
            transform: translate(-50%) translateX(50%);
    } */
 
    .skill-item-box .skill-icons .vl {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            border-left: 2px solid #060606;
            transform: translate(-50%) translateX(50%);
    }

`;

export default class SkillsList extends Component {
    render(){

    this.skills = ['Painting', 'Sanding', 'HVAC', 'Electrical', 'Carpentry', 'Plumbing'];
        /* const skillcount = this.props.skillListCount; */
        return (
            <SkillsListItems>
                    {this.skills.map(function(name, index){
                        return <div className="skill-item-box" key={ index }>
                                    <span style={{ display:'inline-block', width:'100%', borderBottom:'1px solid black'}}>
                                        {name}
                                    </span>
                                    <div class="skill-icons">
                                        <span className="icon-left" style={{float: 'left',marginLeft: '20px'}}>Want</span>
                                        <div className="vl" style={{ height: '50px', width: '1px', clear: 'both', position: 'absolute',left: '50%' }}></div>
                                        <span className="icon-right" style={{float: 'right',marginRight: '20px'}}>Have</span>
                                    </div>
                                </div>
                    })}
            </SkillsListItems>
        )
    }

}