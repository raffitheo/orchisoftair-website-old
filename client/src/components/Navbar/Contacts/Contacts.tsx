import IContactsProps from './IContactsProps';

import { ContactsContainer, ContactsWrapper } from './Contacts.style';
import ContactElement from './ContactElement/ContactElement';

const Contacts = (componentProps: IContactsProps): JSX.Element => {
	return (
		<ContactsWrapper>
			<ContactsContainer>
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
			</ContactsContainer>
		</ContactsWrapper>
	);
};

export default Contacts;
