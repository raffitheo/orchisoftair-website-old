import React from 'react';

import LoaderProps from './ILoaderProps';

import styles from './Loader.module.scss';

const Loader = (componentProps: LoaderProps): JSX.Element => {
    return (
        <div
            className={`${styles['loader-element']}${
                componentProps.className ? `, ${componentProps.className}` : ''
            }`}
            id={componentProps.id}
            style={componentProps.style}
        />
    );
};

export default Loader;
