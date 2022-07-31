import IconExtensionProps from './IIconExtensionProps';

import * as icons from 'react-feather';

const IconExtension = ({ name, ...rest }: IconExtensionProps) => {
	const IconComponent = icons[name];

	return <IconComponent {...rest} />;
};

export default IconExtension;
