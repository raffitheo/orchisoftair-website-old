import React, { useState } from 'react';

import SearchbarProps from './ISearchBarProps';

import IconExtension from '../../IconExtension/IconExtension';

import styles from './SearchBar.module.scss';

const SearchBar = (componentProps: SearchbarProps): JSX.Element => {
    const [searchActive, setSearchActive] = useState<boolean>(
        componentProps.openOnStart ? true : false,
    );

    return (
        <div className={styles['SearchbarWrapper']}>
            <div className={styles['SearchbarContainer']}>
                <form className={styles['SearchbarForm']} action='#' method='get' role='search'>
                    <input
                        className={`${styles['SearchbarInput']}${
                            searchActive ? ` ${styles['Active']}` : ''
                        }`}
                        name='s'
                        placeholder='Cerca nel sito...'
                        type='search'
                    />
                    <button
                        className={`${styles['SearchbarButton']}${
                            searchActive ? ` ${styles['Active']}` : ''
                        }`}
                        type='button'
                        onClick={() => {
                            if (!componentProps.preventCollapse) setSearchActive(!searchActive);
                        }}
                    >
                        <IconExtension
                            name={'Search'}
                            size={19}
                            style={{
                                margin: 'auto',
                            }}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
