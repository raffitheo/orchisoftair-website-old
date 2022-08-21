import { useEffect, useState } from 'react';

import IBackToTopProps from './IBackToTopProps';

import IconExtension from '../IconExtension/IconExtension';

import styles from './BackToTop.module.scss';

const BackToTop = (componentProps: IBackToTopProps): JSX.Element => {
	const [visible, setVisible] = useState<boolean>(false);

	const backToTop =
		(): ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) =>
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		};

	useEffect(() => {
		const handleVisibility = (): void => {
			if (window.pageYOffset > componentProps.minVisibleSize) {
				if (componentProps.maxVisibleSize) {
					if (window.pageYOffset < componentProps.maxVisibleSize)
						setVisible(true);
					else setVisible(false);
				} else setVisible(true);
			} else setVisible(false);
		};

		handleVisibility();

		window.addEventListener('scroll', handleVisibility);

		return () => {
			window.removeEventListener('scroll', handleVisibility);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`${styles['BackToTop']}${
				visible ? ` ${styles['Active']}` : ''
			}`}
			onClick={backToTop()}
		>
			<IconExtension name="ChevronUp" size={35} />
		</div>
	);
};

export default BackToTop;
