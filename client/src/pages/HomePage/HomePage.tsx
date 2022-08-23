import HomePageProps from './IHomePageProps';

import LandingSlider from '../../components/LandingSlider/LandingSlider';

const HomePage = (componentProps: HomePageProps): JSX.Element => {
	return (
		<>
			<div
				style={{
					position: 'relative',
					scrollMarginTop: `${componentProps.navbarHeight}px`,
				}}
			>
				<div
					id="home"
					style={{
						position: 'absolute',
						top: `-${componentProps.navbarHeight}px`,
					}}
				/>
				<LandingSlider
					navbarHeight={componentProps.navbarHeight}
					sliders={componentProps.sliders}
				/>
			</div>

			<div style={{ height: '100vh' }} />
		</>
	);
};

export default HomePage;
