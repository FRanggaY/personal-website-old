//LIBRARIES
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//ASSETS
import { SideBarData } from '../../data/sidebar';
import { ProfileData } from '../../data/profile';

const Container = styled.div`
    position: fixed;

    .active{
        background-color: ${(props) => props.theme.secondaryBackground};
        img{
            filter: invert(99%) sepia(57%) saturate(365%) hue-rotate(233deg) brightness(119%) contrast(100%);
        }
    }
`;

const SideButton = styled.button`
    background-color: ${(props)=> props.theme.sidebarBackground};
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &::before, 
    &::after{
        content: "";
        background-color: ${(props) => props.theme.textColor};
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }

    &::before{
        top: ${(props) => (props.clicked ? "1.5" : "1rem")};
        transform:${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }

    &::after{
        top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
        transform:${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }

`;

const SlickBar = styled.ul`

    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.sidebarBackground};
    
    margin-top: 1rem;
    height: 70vh;
    

    padding: 2rem 0;

    position: absolute;
    left: 0;

    width: ${props => props.clicked?"12rem" : "3.5rem"};
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;

    @media only screen and (max-width: 400px) {
        width: ${(props) => (props.clicked ? "12rem" : "0rem")};
        visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
        opacity: ${(props) => (props.clicked ? "1" : "0")};
        transition: all 0.3s ease, visibility 0.3s, opacity 0.3s;
    }
`;

const Item = styled(NavLink)`
    text-decoration: none;
    color: ${(props)=> props.theme.textColor};
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;

    display: flex;
    padding-left: 1rem;

    &:hover{
        background-color: ${(props) => props.theme.secondaryBackground};

        img{
            filter: invert(99%) sepia(57%) saturate(365%) hue-rotate(233deg) brightness(119%) contrast(100%);
            // filter: invert(99%) sepia(57%) saturate(365%) hue-rotate(233deg) brightness(10%) contrast(100%);
        }
    }

    img{
        width: 1.2rem;
        height: auto;
        filter: ${(props) => props.theme.imgColor};
    }
`;

const Text = styled.span`
    width: ${(props) => (props.clicked ? "100%" : "0")};
    overflow: hidden;
    margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
    transition: all 0.3s ease;
`;

const Profile = styled.div`
    width: ${(props) => (props.clicked ? "14rem" : "3rem")};
    height: 3rem;

    padding: 3rem 1rem;
    // border: 2px solid var(--white);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

    background-color: ${(props) => (props.theme.sidebarBackground)};
    color: ${(props) => (props.theme.textColor)};

    transition: all 0.5s ease;

    img{
        width: ${(props) => (props.clicked ? "5rem" : "2.5rem")};
        height: ${(props) => (props.clicked ? "5rem" : "2.5rem")};
        border-radius: 50%;
        cursor: pointer;

        &:hover{
            border: 2px solid var(--grey);
            padding: 2px;
        }
    }

    @media only screen and (max-width: 400px) {
        width: 14rem;
        margin-left: auto;
    }
`;

const Details = styled.div`
    display: ${(props) => (props.clicked ? "flex" : "none")};
    justify-content: space-between;

    @media only screen and (max-width: 400px) {
        display: flex;
        transition: all 0.5s ease;
    }
`;

const Name = styled.div`
    padding: 0 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4{
        display: inline-block;
        margin-bottom: 10px;
    }
    a{
        font-size: 0.8rem;
        text-decoration: none;
        color: var(--grey);

        &:hover{
            text-decoration: underline;
        }
    }
`;

const HorizontalRule = styled.div`
    padding-top: 10px;
    margin-bottom: 10px;
    border-bottom: 4px solid var(--grey);
    width: 100%;
`;

const Sidebar = () => {

    const buttonData = SideBarData;
    const profileData = ProfileData;

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = useState(false);
    const handleprofileClick = () => setprofileClick(!profileClick);

    return (
        <Container>
            <SideButton clicked={click} onClick={() => handleClick()} ></SideButton>
            <div >
                <SlickBar clicked={click}>

                    {profileData.map((profileItem, blankunique)=> {
                        return (
                            <Profile clicked={profileClick}key={blankunique} >
                                {profileItem.avatar && <img onClick={() => handleprofileClick() } src={profileItem.avatar} alt="" />}
                                {!profileItem.avatar && <img onClick={() => handleprofileClick() } src="https://picsum.photos/200" alt="" />}
                                <Details clicked={profileClick}  onClick={() => setClick(false)}>
                                    <Name>
                                        <h4>{profileItem.name}</h4>
                                        <NavLink activeClassName="nonactive" to="/contact">Contact Me</NavLink>
                                    </Name>
                                </Details>
                            </Profile>
                        )
                    })}

                    {buttonData.map((sidebarItem, blankunique)=> {
                        return (
                            <Item key={blankunique} onClick={() => setClick(false)} exact activeClassName="active" to={sidebarItem.url}>
                                <img src={sidebarItem.icon} alt=""/>
                                <Text clicked={click}>{sidebarItem.name}</Text>
                            </Item>
                        )
                    })}

                    <HorizontalRule></HorizontalRule>

                </SlickBar>

            </div>

        </Container>
    )
}

export default Sidebar;