import IContactsProps from './IContactsProps';

import { Container, Wrapper } from './Contacts.style';
import ContactElement from './ContactElement/ContactElement';

const Contacts = (componentProps: IContactsProps): JSX.Element => {
	return (
		<Wrapper>
			<Container>
				<>
					{componentProps.contacts.map((contact, index) => {
						return (
							<ContactElement
								key={`ContactElement${index}`}
								index={index}
								icon={contact.icon}
								info={contact.info}
								title={contact.title}
							/>
						);
					})}
				</>
			</Container>
		</Wrapper>
	);
};

export default Contacts;
