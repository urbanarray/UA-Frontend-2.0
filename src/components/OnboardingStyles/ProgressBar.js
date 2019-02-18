import React, { Component } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 50%;
    text-align: center;
`;

const ActiveStep = styled.h2`
    background-color: #91c63f;
    color: white;
    margin: 0;
    padding: 10px;
    border: 1px solid #91c63f;
`;

const ActiveBar = styled.div`
    background-color: #91c63f;
    height: 6px;
    width: 25%;
    margin: auto;
`;

const InactiveStep = styled.h2`
    background-color: lightgrey;
    color: white;
    opacity: 0.5;
    margin: 0;
    padding: 10px;
    border: 1px solid lightgrey;
`;

const InactiveBar = styled.div`
    background-color: lightgrey;
    opacity: 0.5;
    height: 6px;
    width: 25%;
    margin: auto;
`;


export default class ProgressBar extends Component {
    render() {
        const currentStep = this.props.currentStep;
        if (currentStep === 1) {
            return (
                <ProgressContainer>
                    <ActiveStep>1</ActiveStep>
                    <InactiveBar />
                    <InactiveStep>2</InactiveStep>
                    <InactiveBar />
                    <InactiveStep>3</InactiveStep>
                </ProgressContainer>
            )
        } else if (currentStep === 2) {
            return (
                <ProgressContainer>
                    <ActiveStep>1</ActiveStep>
                    <ActiveBar />
                    <ActiveStep>2</ActiveStep>
                    <InactiveBar />
                    <InactiveStep>3</InactiveStep>
                </ProgressContainer>
            )
        } else if (currentStep === 3) {
            return (
                <ProgressContainer>
                    <ActiveStep>1</ActiveStep>
                    <ActiveBar />
                    <ActiveStep>2</ActiveStep>
                    <ActiveBar />
                    <ActiveStep>3</ActiveStep>
                </ProgressContainer>
            )
        }
    }
}