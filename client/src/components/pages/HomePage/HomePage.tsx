import React from 'react';

import IHomePageProps from './HomePageProps';

import { LandingWrapper } from './HomePage.style';

const HomePage: React.FC<IHomePageProps> = ({ navbarHeight }) => {
	return (
		<>
			<LandingWrapper></LandingWrapper>
		</>
	);
};

export default HomePage;
