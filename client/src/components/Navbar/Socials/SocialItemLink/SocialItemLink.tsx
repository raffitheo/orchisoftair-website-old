import ISocialItemLinkProps from './ISocialItemLinkProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import { Link } from './SocialItemLink.style';

const SocialItemLink = (componentProps: ISocialItemLinkProps): JSX.Element => {
	return (
		<Link hovercolor={componentProps.hoverColor} href={componentProps.link}>
			<IconExtension
				name={componentProps.icon as IconName}
				size={18}
				style={{
					margin: 'auto',
				}}
			/>
		</Link>
	);
};

export default SocialItemLink;
