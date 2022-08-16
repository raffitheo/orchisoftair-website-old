import { useState } from 'react';

import ISearchbarProps from './ISearchBarProps';

import IconExtension from '../../IconExtension/IconExtension';

import {
	Button,
	Form,
	Input,
	SearchbarContainer,
	SearchbarWrapper,
} from './SeachBar.style';

const SearchBar = (componentProps: ISearchbarProps): JSX.Element => {
	const [searchActive, setSearchActive] = useState<boolean>(
		componentProps.openOnStart ? true : false
	);

	return (
		<SearchbarWrapper>
			<SearchbarContainer>
				<Form action="#" method="get" role="search">
					<Input
						className={searchActive ? 'active' : ''}
						name="s"
						placeholder="Cerca nel sito..."
						type="search"
					/>
					<Button
						className={searchActive ? 'active' : ''}
						type="button"
						onClick={() => {
							if (!componentProps.preventCollapse)
								setSearchActive(!searchActive);
						}}
					>
						<IconExtension
							name={'Search'}
							size={19}
							style={{
								margin: 'auto',
							}}
						/>
					</Button>
				</Form>
			</SearchbarContainer>
		</SearchbarWrapper>
	);
};

export default SearchBar;
