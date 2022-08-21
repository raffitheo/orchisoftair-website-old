import IContactElementProps from './IContactElementProps';

import IconExtension from '../../../IconExtension/IconExtension';
import { IconName } from '../../../IconExtension/IIconExtensionProps';

import styles from './ContactElement.module.scss';

const ContactElement = (componentProps: IContactElementProps): JSX.Element => {
	return (
		<div className={styles['ContactElement']}>
			<IconExtension
				name={componentProps.icon as IconName}
				size={16}
				style={{
					left: '8px',
					position: 'absolute',
					top: '-3px',
				}}
			/>

			<h4 className={styles['ContactTitle']}>{componentProps.title}</h4>

			<h2 className={styles['ContactInfo']}>{componentProps.info}</h2>
		</div>
	);
};

export default ContactElement;
