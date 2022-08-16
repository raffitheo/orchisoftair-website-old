import ISocialsProps from './ISocialsProps';

import SocialItemLink from './SocialItemLink/SocialItemLink';

import { SocialContainer, SocialWrapper } from './Socials.style';

const Socials = (componentProps: ISocialsProps): JSX.Element => {
	return (
		<SocialWrapper>
			<SocialContainer>
				<>
					{componentProps.socials.map((social, index) => {
						return (
							<SocialItemLink
								key={`SocialItemLink${index}`}
								index={index}
								icon={social.icon}
								link={social.link}
								hoverColor={social.hoverColor}
							/>
						);
					})}
				</>
			</SocialContainer>
		</SocialWrapper>
	);
};

export default Socials;
