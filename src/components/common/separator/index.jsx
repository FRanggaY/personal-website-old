//LIBRARIES
import React from 'react';
import styled from 'styled-components';

const SeparatorComponent = styled.div`
    background-color: var(--grey);
    height: 5px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
`;

function Separator() {
    return (
        <SeparatorComponent>
            
        </SeparatorComponent>
    )
}

export default Separator
