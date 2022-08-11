import IContactElementProps from './IContactElementProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import { Element, ElementTitle, ElementInfo } from './ContactElement.style';

const ContactElement = (componentProps: IContactElementProps): JSX.Element => {
	return (
		<Element key={`Contact${componentProps.index}`}>
			<IconExtension
				name={componentProps.icon as IconName}
				size={16}
				style={{
					left: '8px',
					position: 'absolute',
					top: '-3px',
				}}
			/>

			<ElementTitle>{componentProps.title}</ElementTitle>

			<ElementInfo>{componentProps.info}</ElementInfo>
		</Element>
	);
};

export default ContactElement;
