//LIBRARIES
import React, { Component } from 'react';
import MotionHoc from "../motion";
import styled from "styled-components";

import SocialContact from '../../../components/common/social-contact/index';
import Separator from '../../../components/common/separator/index';

import { ContactData } from '../../../data/contact';

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
`;

const SectionTitle = styled.label`
  color: ${(props) => props.theme.textColor};
  font-size: 28px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ContactSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

  @media only screen and (max-width: 720px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactLeft = styled.div`
  max-width: 60%;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.textColor};

    @media only screen and (max-width: 720px){
      max-width: 100%;
      font-size: 16px;
      margin-bottom: 12px;
    }
`;

const ContactInfo = styled.div`
  background: var(--white);
  font-size: 24px;
  display:flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  border-left: 1rem solid var(--grey);

  @media only screen and (max-width: 720px){
    font-size: 16px;
  }

`;

const ContactItem = styled.div`
  text-decoration: none;
  color: var(--black);
  width: 100%;
  padding: 1rem;

  display: flex;
  text-align: start;
  justify-content: start;
  padding-left: 1rem;

  @media only screen and (max-width: 720px){
    padding: 10px;
  }

`;

const Text = styled.span`
  width: 100%;
  overflow: hidden;
  margin-left: 1.5rem;
  transition: all 0.3s ease;
  font-size: 20px;

  span{
    font-weight: 600;
  }

  @media only screen and (max-width: 720px){
    font-size: 16px;
  }

`;

class ContactComponent extends Component {

  render() {
    let contactData = ContactData;
    return (
      <ContactPage>
        <Separator />
        <SectionTitle>Contact Me</SectionTitle>
        <ContactSection>
          <ContactLeft>
            <p>Want to get in touch with me? </p>
            <SocialContact/>

          </ContactLeft>
          
          <ContactInfo>
            {contactData.map((contactItem, unique)=> {
              return (
                <ContactItem key={unique}>
                  {contactItem.icon && <img src={contactItem.icon} alt="" />}
                  <Text><span>{contactItem.name}</span> <br/> {contactItem.desc} </Text>
                </ContactItem>
              )
            })}
          </ContactInfo>
        </ContactSection>
      </ContactPage>
    )
  }
}

const Contact = MotionHoc(ContactComponent);

export default Contact;

