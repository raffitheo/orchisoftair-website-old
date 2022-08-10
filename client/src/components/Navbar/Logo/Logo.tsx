import ILogoProps from './ILogoProps';

import { Wrapper, Image, Container } from './Logo.style';

const Logo = (componentProps: ILogoProps): JSX.Element => {
	return (
		<Wrapper>
			<Container>
				<a href="#home">
					<Image
						alt="logo"
						src={componentProps.image}
						style={componentProps.style}
					/>
				</a>
			</Container>
		</Wrapper>
	);
};

export default Logo;
