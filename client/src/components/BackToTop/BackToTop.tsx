import React, { useContext, useEffect, useState } from 'react';

import BackToTopProps from './IBackToTopProps';
import IconExtension from '../IconExtension/IconExtension';

import { ScrollSizeContext } from '../../pages/OrchiWebsite';

import styles from './BackToTop.module.scss';

const BackToTop = (componentProps: BackToTopProps): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);

    const scrollSize: number = useContext<number>(ScrollSizeContext);

    const backToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleVisibility = (): void => {
            if (scrollSize > componentProps.minVisibleSize) {
                if (componentProps.maxVisibleSize) {
                    if (scrollSize < componentProps.maxVisibleSize) setVisible(true);
                    else setVisible(false);
                } else setVisible(true);
            } else setVisible(false);
        };

        handleVisibility();
    }, [scrollSize]);

    return (
        <div
            className={`${styles['BackToTop']}${visible ? ` ${styles['Active']}` : ''}`}
            onClick={backToTop}
        >
            <IconExtension name='ChevronUp' size={35} />
        </div>
    );
};

export default BackToTop;
