import ILogoProps from './ILogoProps';

import { Image, LogoContainer, LogoWrapper } from './Logo.style';

const Logo = (componentProps: ILogoProps): JSX.Element => {
	return (
		<LogoWrapper>
			<LogoContainer>
				<a href="#home">
					<Image
						alt="logo"
						src={componentProps.image}
						style={componentProps.style}
					/>
				</a>
			</LogoContainer>
		</LogoWrapper>
	);
};

export default Logo;
