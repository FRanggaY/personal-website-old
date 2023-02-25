//LIBRARIES
import React from 'react';
import styled from 'styled-components';

const ExperienceCardComponent = styled.div`
    padding: 8px;
    width: 45%;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;

    background: var(--white);
    border-radius: 10px;
    border-left: 1rem solid var(--grey);

    @media only screen and (max-width: 720px){
        width: 100%;
    }

    @media only screen and (max-width: 500px){
        width: 100%;
        flex-direction: column;
    }

`;

const ExperienceRole = styled.div`
    background: green;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
`;


const ExperienceLogo = styled.img`
    height: 5rem;
`;

const ExperienceInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 5px;
`;

const ExperienceDate = styled.div`
    color: grey;
`;

function ExperienceCard({experience}) {
    return (
        <ExperienceCardComponent>
            <ExperienceLogo src={experience.companyLogo}/>
            <ExperienceRole>{experience.type}</ExperienceRole> 
            <ExperienceInfo>
                <label className="experience-name">{experience.company} <br/> {experience.role} </label>
                <ExperienceDate>
                    <label >{experience.dateJoin}</label> - <label >{experience.dateEnd}</label>
                </ExperienceDate>
            </ExperienceInfo>
        </ExperienceCardComponent>
    )
}

export default ExperienceCard;
