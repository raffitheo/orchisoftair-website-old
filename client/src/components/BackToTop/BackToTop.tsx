import IBackToTopProps from './IBackToTopProps';

import IconExtension from '../IconExtension/IconExtension';

import { Wrapper } from './BackToTop.style';

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
		<Wrapper
			className={componentProps.show ? 'active' : ''}
			onClick={backToTop()}
		>
			<IconExtension name="ChevronUp" size={35} />
		</Wrapper>
	);
};

export default BackToTop;
