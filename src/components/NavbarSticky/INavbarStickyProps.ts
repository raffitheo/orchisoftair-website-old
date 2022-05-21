import React from "react";

export interface INavbarStickyProps {
    navigation: {
        text: string,
        link: string,
        subMenu?: {
            text: string,
            link: string
        }[]
    }[];

    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
};