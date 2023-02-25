//LIBRARIES
import React, { Fragment, Component } from 'react';
import MotionHoc from "../motion";
import styled from "styled-components";


//ASSETS


import { ProfileData } from '../../../data/profile';

import SocialContact from '../../../components/common/social-contact/index';


const HomePage = styled.div`
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

const AboutTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items center;

  @media only screen and (max-width: 720px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;

const AboutInfo = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.textColor};

  span{
    color: blue;
    font-size: 48px;
    font-weight: 600;
  }

  @media only screen and (max-width: 720px){
    font-size: 20px;

    span{
      font-size: 40px;
    }
  }

`;

const AboutThumb = styled.img`
  height: 20rem;
  width: 20rem;

  @media only screen and (max-width: 720px){
    height: 15rem;
    width: 15rem;
  }
`;

class HomeComponent extends Component {

  render() {
    let profileData = ProfileData;
    return (
      <Fragment>
        <HomePage>
  
          {profileData.map((profileItem, id) => {
            return(
              <AboutTop key={id}>
                <AboutInfo>
                  Hello World👋, I am <br/>
                  <span>{profileItem.name}</span> <br/>
                  {profileItem.role}
                </AboutInfo>
                <div className="about-photo">
                  {profileItem.thumbnail &&
                    <AboutThumb src={profileItem.thumbnail } alt=""/>
                  }
                </div>
              </AboutTop>
            )
          })}
          
        </HomePage>
  
        <SocialContact />
        
      </Fragment>
    )
  }
}

const Home = MotionHoc(HomeComponent);

export default Home;