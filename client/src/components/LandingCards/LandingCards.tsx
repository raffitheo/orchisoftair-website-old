import React from 'react';

import styles from './LandingCards.module.scss';

const LandingCards = () => (
    <div id={styles['LandingCardsWrapper']}>
        <div id={styles['LandingCardsContainer']}>
            <div id={styles['LandingCardsRowWrapper']}>
                <div id={styles['LandingCardsRowContainer']}></div>
            </div>
        </div>
    </div>
);

export default LandingCards;
