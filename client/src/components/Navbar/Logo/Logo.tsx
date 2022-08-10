import React from 'react';
import ILogoProps from './ILogoProps';

import { LogoWrapper, LogoImage, LogoContainer } from './Logo.style';

const Logo: React.FC<ILogoProps> = (componentProps: ILogoProps) => {
	return (
		<LogoWrapper>
			<LogoContainer>
				<a href="#home">
					<LogoImage
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
