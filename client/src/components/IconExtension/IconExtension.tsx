import IIconExtensionProps from './IIconExtensionProps';

import * as icons from 'react-feather';

const IconExtension = (componentProps: IIconExtensionProps): JSX.Element => {
	const IconComponent = icons[componentProps.name];

	return <IconComponent {...componentProps} />;
};

export default IconExtension;
