import React from 'react';
import styled from 'styled-components';

const SkillCardComponent = styled.div`
    width: max-content;
    padding: 8px 16px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6px;
    border-radius: 6px;

    @media only screen and (max-width: 720px){
        width: max-content;
        height: 100px
    }

`;

const SkillIcon = styled.div`
    font-size: 80px;

    @media only screen and (max-width: 720px){
        font-size: 60px;
    }
`;
const SkillName = styled.label`
    color: ${(props) => props.theme.textColor};
    font-size: 18px;
`;



function SkillCard({skilllist}) {
    return (
        <SkillCardComponent>
            <SkillIcon>{skilllist.icon}</SkillIcon>
            <SkillName>{skilllist.name}</SkillName>
        </SkillCardComponent>
    )
}

export default SkillCard;
