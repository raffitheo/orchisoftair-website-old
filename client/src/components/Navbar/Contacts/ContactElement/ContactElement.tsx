import IContactElementProps from './IContactElementProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import { Element, Title, Info } from './ContactElement.style';

const ContactElement = (componentProps: IContactElementProps): JSX.Element => {
	return (
		<Element>
			<IconExtension
				name={componentProps.icon as IconName}
				size={16}
				style={{
					left: '8px',
					position: 'absolute',
					top: '-3px',
				}}
			/>

			<Title>{componentProps.title}</Title>

			<Info>{componentProps.info}</Info>
		</Element>
	);
};

export default ContactElement;
