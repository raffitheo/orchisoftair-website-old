import React, { useEffect, useRef, useState } from 'react';

import SocialItemLinkProps from './ISocialItemLinkProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import styles from './SocialItemLink.module.scss';

const SocialItemLink = (componentProps: SocialItemLinkProps) => {
    const [hover, setHover] = useState<boolean>(false);

    const socialElement = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const setMouseHover = () => setHover(true);
        const unsetMouseHover = () => setHover(false);

        if (socialElement && socialElement.current) {
            socialElement.current.addEventListener('mouseover', setMouseHover);
            socialElement.current.addEventListener('mouseleave', unsetMouseHover);

            return () => {
                socialElement.current?.removeEventListener('mouseover', setMouseHover);
                socialElement.current?.removeEventListener('mouseleave', unsetMouseHover);
            };
        }
    }, []);

    return (
        <a
            className={styles['LinkElement']}
            style={{
                backgroundColor: hover ? componentProps.hoverColor : '',
                borderColor: hover ? componentProps.hoverColor : '',
            }}
            href={componentProps.link}
            ref={socialElement}
        >
            <IconExtension
                name={componentProps.icon as IconName}
                size={18}
                style={{
                    margin: 'auto',
                }}
            />
        </a>
    );
};

export default SocialItemLink;
