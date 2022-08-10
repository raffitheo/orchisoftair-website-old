import { SVGAttributes } from 'react';

import * as icons from 'react-feather';

export type IconName = keyof typeof icons;

interface IIconExtensionProps extends SVGAttributes<SVGElement> {
	name: IconName;
	color?: string;
	size?: string | number;
}

export default IIconExtensionProps;
