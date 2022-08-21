import { SocialsProps } from './ISocialsProps';

import SocialItemLink from './SocialItemLink/SocialItemLink';

import styles from './Socials.module.scss';

const Socials = (componentProps: SocialsProps): JSX.Element => {
	return (
		<div id={styles['SocialWrapper']}>
			<div id={styles['SocialContainer']}>
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
			</div>
		</div>
	);
};

export default Socials;
