import React, { useState } from 'react';

import ISearchbarProps from './ISearchBarProps';

import IconExtension from '../../IconExtension/IconExtension';

import {
	SearchBarButton,
	SearchBarContainer,
	SearchBarForm,
	SearchBarInput,
	SearchBarWrapper,
} from './SeachBar.style';

const SearchBar: React.FC<ISearchbarProps> = (
	componentProps: ISearchbarProps
) => {
	const [searchActive, setSearchActive] = useState<boolean>(
		componentProps.openOnStart ? true : false
	);

	return (
		<SearchBarWrapper>
			<SearchBarContainer>
				<SearchBarForm action="#" method="get" role="search">
					<SearchBarInput
						className={searchActive ? 'active' : ''}
						name="s"
						placeholder="Cerca nel sito..."
						type="search"
					/>
					<SearchBarButton
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
					</SearchBarButton>
				</SearchBarForm>
			</SearchBarContainer>
		</SearchBarWrapper>
	);
};

export default SearchBar;
