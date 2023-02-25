//LIBRARIES
import React from 'react';
import styled from 'styled-components';

const PortfolioCardComponent = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    padding: 1rem 0;
    border-left: 1rem solid var(--grey);
    background: white;
    border-radius: 10px;
    padding: 10px 20px;

    @media only screen and (max-width: 720px){
        flex-direction: column-reverse;
    }
`;

const PortfolioInfo = styled.div`
    margin-right: 2rem;

    @media only screen and (max-width: 720px){
        margin-left: 15%;
        margin-top: 12px;
    }
`;

const SectionTitle = styled.label`
    font-size: 24px;
    font-weight: 600;
`;

const PortfolioThumb = styled.img`
    width: 70%;
    border-radius: 10px;

    @media only screen and (max-width: 720px){
        width: 100%;
    }
`;


const PortfolioTags = styled.div`
    display: flex;
    max-width: 60%;
    flex-wrap: wrap;

    label{
        font-size: 16px;
        color: blue;
        padding: 2px 4px;
        margin-right: 6px;
        margin-bottom: 4px;
        border-radius: 4px;
    }
    @media only screen and (max-width: 720px){
        max-width: 100%;
    }
`;

const PortfolioLinks = styled.div`
    margin-top: 6px;
    margin-bottom: 6px;
    display: flex;

    a {
        text-decoration: none;
        color: ${(props)=> props.theme.textColor};
    }
    i {
        display: flex;
        align-items: center;
        max-repeat: 4px;
        padding-right: 4px;
    }

`;

const LinkButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=> props.theme.sidebarBackground};
    border-radius: 10px;
    border: 1px solid ${(props)=> props.theme.textColor};
    width: max-content;
    padding: 4px 8px;
    font-size: 16px;
    margin-right: 6px;

    &:hover{
        background-color: var(--grey);
    }

`;


function PortfolioCard({portfolio}) {
    return (
        <PortfolioCardComponent>
            <PortfolioInfo >
                <SectionTitle>{portfolio.title}</SectionTitle>
            
                <PortfolioLinks>
                    {portfolio.demo && (
                    <a href={portfolio.demo}>
                        <LinkButton>
                        <i></i>
                        Demo
                        </LinkButton>
                    </a>) }
                    {portfolio.github && (
                    <a href={portfolio.github}>
                        <LinkButton>
                            <i className="devicon-github-original"></i>
                             Github
                        </LinkButton>
                    </a>) }
                </PortfolioLinks>
                <PortfolioTags>
                    {portfolio.tags.map((tag, blankunique)=>{
                        return(
                            <label className="tag" key={blankunique}>#{tag}</label>
                        )
                    })}
                </PortfolioTags>
            </PortfolioInfo>
            <PortfolioThumb src={portfolio.image} />
        </PortfolioCardComponent>
    )
}

export default PortfolioCard
