import {createGlobalStyle} from 'styled-components';

export const LightTheme = {
    sidebarBackground: "var(--light-theme-background-color)",
    baseBackground: "var(--light-theme-base-color)",
    secondaryBackground: "var(--light-theme-secondary-color)",
    textColor: "var(--light-theme-text-color)",
    imgColor: "sepia(11%) saturate(321%) brightness(85%)",



    titleColor: "#dc658b",
    tagLineColor: "black",
}
export const DarkTheme = {
    sidebarBackground: "var(--dark-theme-background-color)",
    baseBackground: "var(--dark-theme-base-color)",
    secondaryBackground: "var(--dark-theme-secondary-color)",
    textColor: "var(--dark-theme-text-color)",
    imgColor: "invert(83%) sepia(11%) saturate(321%) hue-rotate(162deg) brightness(85%) contrast(87%)",


    titleColor: "#lightpink",
    tagLineColor: "lavender",
}

export const themes = {
    light: LightTheme,
    dark: DarkTheme,
}

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.baseBackground};
        transition: all .5s ease;
    }

`