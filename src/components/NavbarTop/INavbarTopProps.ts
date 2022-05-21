export interface INavbarTopProps {
    contacts: {
        icon: string,
        title: string,
        info: string
    }[];
    socials: {
        icon: string,
        link: string,
        hoverColor: string
    }[];
    
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
};