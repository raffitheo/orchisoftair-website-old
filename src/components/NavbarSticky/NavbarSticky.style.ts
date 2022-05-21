import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: ${(props) => props.theme.main};
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 200ms ease-in-out;
    width: 100%;
    z-index: 999;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }

    &::before, &::after {
        content: " ";
        display: table;
    }
    &::after {
        clear: both;
    }
`;

export const Row = styled.div`
    margin: 0 -15px;

    &::before, &::after {
        content: " ";
        display: table;
    }
    &::after {
        clear: both;
    }
`;

export const MainMenuWrapper = styled.div`
    min-height: 1px;
    padding: 0 15px;
    position: relative;

    @media (min-width: 768px) {
        float: left;
        width: 75%;
    }
`;

export const MainMenu = styled.nav`
    display: block;
`;

export const MainMenuDesktop = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const MainMenuElement = styled.li`
    display: inline-block;
    line-height: 1.2;
    margin-right: 78px;
    position: relative;

    :before {
        background-color: ${(props) => props.theme.textAccent};
        bottom: 0;
        content: '';
        height: 3px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transition: all 200ms ease-in-out;
        width: 100%;
    }
    &.currently-selected:before {
        opacity: 1;
    }
`;

export const MainMenuElementSubMenu = styled.ul`
    background-color: ${(props) => props.theme.textPrimary};
    left: 50%;
    margin-left: -61px;
    opacity: 0;
    padding: 16px 0 16px 40px;
    position: absolute;
    top: 120px;
    transition: all 200ms ease-in-out;
    visibility: hidden;
    width: 200px;
    z-index: 9;
`;

export const MainMenuElementText = styled.a`
    color: ${(props) => props.theme.textPrimary};
    display: block;
    font-size: 16px;
    padding: 40px 0 39px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;

    &:hover {
        color: ${(props) => props.theme.textAccent};

        ${MainMenuElementSubMenu} {
            opacity: 1;
            top: 100%;
            visibility: visible;
        }
    }
`;

export const MainMenuElementSubMenuElement = styled.li`
    display: block;
    line-height: 1.2;
    margin: 22px 0;
    position: relative;

    &.currently-selected {
        a {
            color: ${(props) => props.theme.textAccent};
        }
    }
`;

export const MainMenuElementSubMenuElementText = styled.a`
    color: black;
    display: block;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;

    &:hover {
        color: ${(props) => props.theme.textAccent};
    }
`;