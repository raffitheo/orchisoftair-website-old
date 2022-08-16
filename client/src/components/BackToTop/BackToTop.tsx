import IBackToTopProps from './IBackToTopProps';

import IconExtension from '../IconExtension/IconExtension';

import { BackToTopElement } from './BackToTop.style';

const BackToTop = (componentProps: IBackToTopProps): JSX.Element => {
	const backToTop =
		(): ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) =>
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		};

	return (
		<BackToTopElement
			className={componentProps.show ? 'active' : ''}
			onClick={backToTop()}
		>
			<IconExtension name="ChevronUp" size={35} />
		</BackToTopElement>
	);
};

export default BackToTop;
