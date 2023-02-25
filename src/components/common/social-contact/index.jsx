//LIBRARIES
import React from 'react'
import styled from 'styled-components';

//ASSETS
import { SocialData } from '../../../data/social';


const SocialContactComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 3rem;
        width: 3rem;

        @media only screen and (max-width: 720px){
            height: 2rem;
            width: 2rem;
        }
    }
`;

const SocialNetwork = styled.div`
    padding: 5px;
    cursor: pointer;
    &:hover{
        background: grey;
        border-radius: 10px;
    }
`;

function SocialContact() {

    const data = SocialData;

    return (
        <SocialContactComponent>
            {data.map((item, blankunique)=>{
                return (
                    <a href={item.link} target="_nonblank" rel="noreferrer" key={blankunique}>
                        <SocialNetwork>
                            {item.icon && <img src={item.icon} alt="" className="social-icon" />}
                        </SocialNetwork>
                    </a>
                )
            })}
        </SocialContactComponent>
    )
}

export default SocialContact
