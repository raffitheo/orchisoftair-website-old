import { SVGAttributes } from 'react';

import * as icons from 'react-feather';

export type IconName = keyof typeof icons;

export default interface IconExtensionProps extends SVGAttributes<SVGElement> {
	name: IconName;
	color?: string;
	size?: string | number;
}
