import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${(props) => props.theme.main};
    left: 0;
    padding: 7px 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 99;
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

export const LogoWrapper = styled.div`
    min-height: 1px;
    padding: 0 15px;
    position: relative;

    @media (min-width: 768px) {
        float: left;
        width: 16.66666667%;
    }
    @media (min-width: 1200px) {
        float: left;
        width: 25%;
    }
`;

export const Logo = styled.div`
    height: 106px;
    width: 152px;

    @media (min-width: 320px) and (max-width: 767px) {
        height: auto;
        width: 80px;
    }
`;

export const LogoImage = styled.img`
    height: 100%;
    width: auto;

    @media (min-width: 320px) and (max-width: 767px) {
        height: auto;
        width: 100%;
    }
`;

export const ContactsWrapper = styled.div`
    float: left;
    min-height: 1px;
    padding: 0 15px;
    position: relative;

    @media (min-width: 768px) {
        width: 58.33333333%;
    }
`;

export const ContactsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0 22px;

    @media (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`;

export const Contacts = styled.div`
    color: ${(props) => props.theme.textPrimary};
    display: inline-block;
    margin-right: 40px;
    padding-left: 30px;
    position: relative;
    text-align: left;
    text-transform: uppercase;

    &:last-of-type {
        margin-right: 0;
    }
`;

export const ContactTitle = styled.h6`
    color: ${(props) => props.theme.textAccent};
    font-size: 14px;
    line-height: 1;
    letter-spacing: .7px;
    margin-bottom: 7px;

    @media (min-width: 768px) and (max-width: 990px) {
        font-size: 12px;
    }
`;

export const ContactInfo = styled.h3`
    font-size: 24px;
    line-height: 1;
    letter-spacing: 1.2px;

    @media (min-width: 768px) and (max-width: 990px) {
        font-size: 16px;
    }
`;

export const SocialsWrapper = styled.div`
    min-height: 1px;
    padding: 0 15px;
    position: relative;

    @media (min-width: 768px) {
        float: left;
        width: 25%;
    }
    @media (min-width: 1200px) {
        float: left;
        width: 16.66666667%;
    }
`;

export const Socials = styled.div`
    padding: 33px 0;
    text-align: right;

    @media (min-width: 320px) and (max-width: 767px) {
        padding: 0;
        position: absolute;
        right: 15px;
        text-align: right;
        top: -63px;
    }
`;

export const SocialLink = styled.a`
    align-items: center;
    border: 2px solid ${(props) => props.theme.textPrimary};
    border-radius: 50%;
    color: ${(props) => props.theme.textPrimary};
    display: inline-flex;
    height: 40px;
    justify-content: center;
    line-height: 1;
    margin-right: 10px;
    text-align: center;
    width: 40px;

    &:last-of-type {
        margin-right: 0;
    }
`;