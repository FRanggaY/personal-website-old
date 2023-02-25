import React from 'react';

import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
    position: fixed;
    top: 10px;
    right:32px;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 10px;
    border: 2px solid blue;
    background-color: transparent;
    color: blue;
    &:focus {
        outline: none;
    }
    transition: all .5s ease;

    &:hover{
        background-color: ${(props)=> props.theme.secondaryBackground};
        transition: none;
    }
`;


function ThemeButton(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "dark" ? <HiMoon size={30} /> : <CgSun size={30} />;
    return (
        <div>
            <Toggle onClick={changeTheme}>
                {icon}
            </Toggle>
        </div>
    )
}

export default ThemeButton
