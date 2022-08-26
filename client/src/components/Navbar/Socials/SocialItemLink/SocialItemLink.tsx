import React, { useState } from 'react';

import SocialItemLinkProps from './ISocialItemLinkProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import styles from './SocialItemLink.module.scss';

const SocialItemLink = (componentProps: SocialItemLinkProps): JSX.Element => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <a
            className={styles['LinkElement']}
            style={{
                backgroundColor: hover ? componentProps.hoverColor : '',
                borderColor: hover ? componentProps.hoverColor : '',
            }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            href={componentProps.link}
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
