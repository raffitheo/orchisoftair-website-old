import ISocialsItemLinkProps from './ISocialsItemLinkProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import { Link } from './SocialsItemLink.style';

const SocialsItemLink = (
	componentProps: ISocialsItemLinkProps
): JSX.Element => {
	return (
		<Link
			key={`Social${componentProps.index}`}
			hovercolor={componentProps.hoverColor}
			href={componentProps.link}
		>
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

export default SocialsItemLink;
