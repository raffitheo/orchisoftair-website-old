import ISocialsProps from './ISocialsProps';

import SocialsItemLink from './SocialsItemLink/SocialsItemLink';

import { Container, Wrapper } from './Socials.style';

const Socials = (componentProps: ISocialsProps): JSX.Element => {
	return (
		<Wrapper>
			<Container>
				<>
					{componentProps.socials.map((social, index) => {
						return (
							<SocialsItemLink
								index={index}
								icon={social.icon}
								link={social.link}
								hoverColor={social.hoverColor}
							/>
						);
					})}
				</>
			</Container>
		</Wrapper>
	);
};

export default Socials;
