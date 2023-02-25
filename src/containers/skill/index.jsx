//LIBRARIES
import React from 'react';
import styled from 'styled-components';

import {SkillData} from '../../data/skills';

import SkillCard from '../../components/card/skill/index';

const SectionTitle = styled.label`
  color: ${(props) => props.theme.textColor};
  font-size: 28px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SkillSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;

  @media only screen and (max-width: 720px){
    flex-direction: column;
  }

`;

const SkillSectionTitle = styled.label`
  color: blue;
  font-size: 24px;
  font-weight: 600;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  justify-content: flex-end;


  @media only screen and (max-width: 720px){
    max-width: 100%;
    justify-content: center;
  }

`;


function SkillContainer() {

    const skillData = SkillData;

    return (
        <Skills>
          <SectionTitle>Skills</SectionTitle>
          {skillData.map((skillItem, id) => {
            return (
              <SkillSection key={id}>
                <SkillSectionTitle>{skillItem.type}</SkillSectionTitle>
                <SkillList>
                  {skillItem.list.map((skillListItem, id) => {
                    return (
                      <SkillCard skilllist={skillListItem} key={id}/>
                    )
                  })}
                </SkillList>
              </SkillSection>
            )
          })}
      </Skills>
    )
}

export default SkillContainer;
