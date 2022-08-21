import { Contact } from '../../../../interfaces/IContact';

interface IContactElementProps extends Contact {
	index: number;
}

export type ContactElementProps = IContactElementProps;
