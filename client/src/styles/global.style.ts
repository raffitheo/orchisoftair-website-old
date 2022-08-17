import { createGlobalStyle } from 'styled-components';

import AntonWOFF from '../assets/fonts/Anton/anton-v23-latin-regular.woff';
import AntonWOFF2 from '../assets/fonts/Anton/anton-v23-latin-regular.woff2';

import SatoshiBlackTTF from '../assets/fonts/Satoshi/Satoshi-Black.ttf';
import SatoshiBlackWOFF from '../assets/fonts/Satoshi/Satoshi-Black.woff';
import SatoshiBlackWOFF2 from '../assets/fonts/Satoshi/Satoshi-Black.woff2';
import SatoshiBlackItalicTTF from '../assets/fonts/Satoshi/Satoshi-BlackItalic.ttf';
import SatoshiBlackItalicWOFF from '../assets/fonts/Satoshi/Satoshi-BlackItalic.woff';
import SatoshiBlackItalicWOFF2 from '../assets/fonts/Satoshi/Satoshi-BlackItalic.woff2';

import SatoshiBoldTTF from '../assets/fonts/Satoshi/Satoshi-Bold.ttf';
import SatoshiBoldWOFF from '../assets/fonts/Satoshi/Satoshi-Bold.woff';
import SatoshiBoldWOFF2 from '../assets/fonts/Satoshi/Satoshi-Bold.woff2';
import SatoshiBoldItalicTTF from '../assets/fonts/Satoshi/Satoshi-BoldItalic.ttf';
import SatoshiBoldItalicWOFF from '../assets/fonts/Satoshi/Satoshi-BoldItalic.woff';
import SatoshiBoldItalicWOFF2 from '../assets/fonts/Satoshi/Satoshi-BoldItalic.woff2';

import SatoshiItalicTTF from '../assets/fonts/Satoshi/Satoshi-Italic.ttf';
import SatoshiItalicWOFF from '../assets/fonts/Satoshi/Satoshi-Italic.woff';
import SatoshiItalicWOFF2 from '../assets/fonts/Satoshi/Satoshi-Italic.woff2';

import SatoshiLightTTF from '../assets/fonts/Satoshi/Satoshi-Light.ttf';
import SatoshiLightWOFF from '../assets/fonts/Satoshi/Satoshi-Light.woff';
import SatoshiLightWOFF2 from '../assets/fonts/Satoshi/Satoshi-Light.woff2';
import SatoshiLightItalicTTF from '../assets/fonts/Satoshi/Satoshi-LightItalic.ttf';
import SatoshiLightItalicWOFF from '../assets/fonts/Satoshi/Satoshi-LightItalic.woff';
import SatoshiLightItalicWOFF2 from '../assets/fonts/Satoshi/Satoshi-LightItalic.woff2';

import SatoshiMediumTTF from '../assets/fonts/Satoshi/Satoshi-Medium.ttf';
import SatoshiMediumWOFF from '../assets/fonts/Satoshi/Satoshi-Medium.woff';
import SatoshiMediumWOFF2 from '../assets/fonts/Satoshi/Satoshi-Medium.woff2';
import SatoshiMediumItalicTTF from '../assets/fonts/Satoshi/Satoshi-MediumItalic.ttf';
import SatoshiMediumItalicWOFF from '../assets/fonts/Satoshi/Satoshi-MediumItalic.woff';
import SatoshiMediumItalicWOFF2 from '../assets/fonts/Satoshi/Satoshi-MediumItalic.woff2';

import SatoshiRegularTTF from '../assets/fonts/Satoshi/Satoshi-Regular.ttf';
import SatoshiRegularWOFF from '../assets/fonts/Satoshi/Satoshi-Regular.woff';
import SatoshiRegularWOFF2 from '../assets/fonts/Satoshi/Satoshi-Regular.woff2';

import SatoshiVariableTTF from '../assets/fonts/Satoshi/Satoshi-Variable.ttf';
import SatoshiVariableWOFF from '../assets/fonts/Satoshi/Satoshi-Variable.woff';
import SatoshiVariableWOFF2 from '../assets/fonts/Satoshi/Satoshi-Variable.woff2';
import SatoshiVariableItalicTTF from '../assets/fonts/Satoshi/Satoshi-VariableItalic.ttf';
import SatoshiVariableItalicWOFF from '../assets/fonts/Satoshi/Satoshi-VariableItalic.woff';
import SatoshiVariableItalicWOFF2 from '../assets/fonts/Satoshi/Satoshi-VariableItalic.woff2';

import DefaultTheme from './defaultTheme.style';

export default createGlobalStyle`
    @font-face {
        font-display: swap;
        font-family: 'Anton';
        font-style: normal;
        font-weight: 400;
        src: url(${AntonWOFF}) format('woff'), url(${AntonWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Variable';
        font-style: normal;
        font-weight: 300 900;
        src: url(${SatoshiVariableTTF}) format('truetype'),
            url(${SatoshiVariableWOFF}) format('woff'),
            url(${SatoshiVariableWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-VariableItalic';
        font-style: italic;
        font-weight: 300 900;
        src: url(${SatoshiVariableItalicTTF}) format('truetype'),
            url(${SatoshiVariableItalicWOFF}) format('woff'),
            url(${SatoshiVariableItalicWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Light';
        font-style: normal;
        font-weight: 300;
        src: url(${SatoshiLightTTF}) format('truetype'),
            url(${SatoshiLightWOFF}) format('woff'),
            url(${SatoshiLightWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-LightItalic';
        font-style: italic;
        font-weight: 300;
        src: url(${SatoshiLightItalicTTF}) format('truetype'),
            url(${SatoshiLightItalicWOFF}) format('woff'),
            url(${SatoshiLightItalicWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Regular';
        font-style: normal;
        font-weight: 400;
        src: url(${SatoshiRegularTTF}) format('truetype'),
            url(${SatoshiRegularWOFF}) format('woff'),
            url(${SatoshiRegularWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Italic';
        font-style: italic;
        font-weight: 400;
        src: url(${SatoshiItalicTTF}) format('truetype'),
            url(${SatoshiItalicWOFF}) format('woff'),
            url(${SatoshiItalicWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Medium';
        font-style: normal;
        font-weight: 500;
        src: url(${SatoshiMediumTTF}) format('truetype'),
            url(${SatoshiMediumWOFF}) format('woff'),
            url(${SatoshiMediumWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-MediumItalic';
        font-style: italic;
        font-weight: 500;
        src: url(${SatoshiMediumItalicTTF}) format('truetype'),
            url(${SatoshiMediumItalicWOFF}) format('woff'),
            url(${SatoshiMediumItalicWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Bold';
        font-style: normal;
        font-weight: 700;
        src: url(${SatoshiBoldTTF}) format('truetype'),
            url(${SatoshiBoldWOFF}) format('woff'),
            url(${SatoshiBoldWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-BoldItalic';
        font-style: italic;
        font-weight: 700;
        src: url(${SatoshiBoldItalicTTF}) format('truetype'),
            url(${SatoshiBoldItalicWOFF}) format('woff'),
            url(${SatoshiBoldItalicWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-Black';
        font-style: normal;
        font-weight: 900;
        src: url(${SatoshiBlackTTF}) format('truetype'),
            url(${SatoshiBlackWOFF}) format('woff'),
            url(${SatoshiBlackWOFF2}) format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Satoshi-BlackItalic';
        font-style: italic;
        font-weight: 900;
        src: url(${SatoshiBlackItalicTTF}) format('truetype'),
            url(${SatoshiBlackItalicWOFF}) format('woff'),
            url(${SatoshiBlackItalicWOFF2}) format('woff2');
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Satoshi-Variable;
    }

    a {
        color: ${DefaultTheme.text.primary};
        text-decoration: none;
    }

    body {
        color: ${DefaultTheme.text.primary};
    }

    #root {
        margin: 0 auto;
        overflow-x: hidden;
    }
`;
