//LIBRARIES
import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    color: ${(props) => props.theme.textColor};
`;

function Footer() {
    return (
        <FooterComponent>
           © 2021 | Made with by Franciscus Rangga Yogianto
        </FooterComponent>
    )
}

export default Footer;
