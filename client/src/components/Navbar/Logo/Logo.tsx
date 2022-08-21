import ILogoProps from './ILogoProps';

import styles from './Logo.module.scss';

const Logo = (componentProps: ILogoProps): JSX.Element => {
	return (
		<div className={styles['LogoWrapper']}>
			<div className={styles['LogoContainer']}>
				<a href="#home">
					<img
						alt="logo"
						className={styles['Image']}
						src={componentProps.image}
						style={componentProps.style}
					/>
				</a>
			</div>
		</div>
	);
};

export default Logo;
