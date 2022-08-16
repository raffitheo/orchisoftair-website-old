import IHomePageProps from './IHomePageProps';

import LandingSlider from '../../LandingSlider/LandingSlider';

const HomePage = (componentProps: IHomePageProps): JSX.Element => {
	return (
		<>
			<LandingSlider
				isMobile={componentProps.isMobile}
				navbarHeight={componentProps.navbarHeight}
				sliders={componentProps.sliders}
			/>

			<div style={{ height: '100vh' }} />
		</>
	);
};

export default HomePage;
