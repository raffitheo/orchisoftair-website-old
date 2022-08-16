import styled from 'styled-components';

const ContactsWrapper = styled.div`
	float: left;
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		width: 58.33333333%;
	}
	@media (min-width: 1200px) {
		width: 66.6%;
	}
`;

const ContactsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 30px 0 22px;

	@media (min-width: 320px) and (max-width: 767px) {
		display: none;
	}
`;

export { ContactsWrapper, ContactsContainer };
