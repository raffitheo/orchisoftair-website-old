import { SVGAttributes } from 'react';

import * as icons from 'react-feather';

export type IconName = keyof typeof icons;

type IconExtensionProps = {
    name: IconName;
    color?: string;
    size?: string | number;
} & SVGAttributes<SVGElement>;

export default IconExtensionProps;
