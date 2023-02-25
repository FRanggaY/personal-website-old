//LIBRARIES
import React from 'react';
import styled from 'styled-components';

import {ExperienceData} from '../../data/experiences';

import ExperienceCard from '../../components/card/experience/index';

const ExperienceConta = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SectionTitle = styled.label`
    color: ${(props) => props.theme.textColor};
    font-size: 28px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ExperienceList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0px;
`;

function ExperienceContainer() {

    const experienceData = ExperienceData;

    return (
        <ExperienceConta>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceList>
                {experienceData.map((experience, blankunique)=> {
                    return (
                        <ExperienceCard experience={experience} key={blankunique}/>
                    )
                })}
            </ExperienceList>
        </ExperienceConta>
    )
}

export default ExperienceContainer;
