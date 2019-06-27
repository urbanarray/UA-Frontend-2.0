import React, {Component} from "react";
import styled from 'styled-components';

export const FilterList = styled.div`
    
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: center;
align-content: center;
justify-content: center;
    
    .filter-item-box{
        color: white;
        border-radius: 112px;
        background-color: grey;
        padding: 17px;
        margin: 10px;
        flex-basis: 150px;
    }

`;

export class FilterTags extends Component {
    render(){
    this.filters = ['Construction', 'Gardening and Farming', 'Activism', 'Coding and Programming', 'Design', 'Project Management'];
        /* const skillcount = this.props.skillListCount; */

        return (

            <FilterList>
                    {this.filters.map(function(name, index){
                    return <div className="filter-item-box" key={ index }>
                                <span>{name}</span>
                            </div>;
                    })}
            </FilterList>
                
        )
    }

}