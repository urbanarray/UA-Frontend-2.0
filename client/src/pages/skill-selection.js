import React from 'react';
import { SmallLogo } from '../components/OnboardingStyles/LandingPageLogo';
import { SkillsLogo } from '../components/OnboardingStyles/skillsPageLogo';
import { SkillsSearchBox } from '../components/OnboardingStyles/skillsPageLogo';
import ProgressBar from '../components/OnboardingStyles/ProgressBar';
import SkillsList  from '../components/OnboardingStyles/SkillsList';
import {SkillsHeader}  from '../components/OnboardingStyles/SkillsHeader';
import {FilterTags}  from '../components/OnboardingStyles/FilterTags';
import colorlogo from '../assets/images/colorlogo.png';
import skillsImage from '../assets/images/006-interview.svg'

const SkillSelection = () => {
    return (
        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{margin:'30px 0'}}>
                <SmallLogo src={colorlogo} />
                <ProgressBar currentStep={2} />
        
                <SkillsHeader>
                    <h1>Urban Array is   {<br></br>} all about skills</h1>
                    <SkillsLogo src={skillsImage} />
                </SkillsHeader>

                <p style={{width:'400px', margin:'0 auto'}} >Tell us the skills you have and the skills you want to learn and we'll help you reach your goals.</p>

                 <SkillsSearchBox>
                    <div>
                        <input type='text' placeholder='Search other skills here.' id='search-text-input' />
                            {/* <img src='magnifying_glass.png' /> */}

                            <i class="fas fa-search"></i>
                    </div>
                </SkillsSearchBox>
            </div>

            <div className="filter-tabs-label" style={{overflow:'auto'}}>
                 <p>FILTER CONTENT</p>
            </div>

            <FilterTags></FilterTags>

            <SkillsList skillListCount="10">
                <p>hello Gregory</p>
            </SkillsList>
        </div>
    )
}

export default SkillSelection;