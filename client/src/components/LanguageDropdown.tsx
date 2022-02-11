import React, { useEffect } from 'react';
import { Box } from './index';
import Dropdown, { Option } from 'react-dropdown';
import './css/language-dropdown.css';

const options = ['English', 'Spanish'];

const LanguageDropdown = ({
	currentLanguage,
	onSetCurrentLanguage,
}: {
	currentLanguage: string;
	onSetCurrentLanguage: (arg0: string) => void;
}) => {
	useEffect(() => {
		onSetCurrentLanguage('English');
	}, []);

	const setLanguage = (option: Option) => {
		onSetCurrentLanguage(option.value);
	};

	return (
		<Box
			width={150}
			height='100%'
			minHeight={56}
			center
			flexDirection='column'
			backgroundColor='inherit'
		>
			<Dropdown
				options={options}
				onChange={(option) => setLanguage(option)}
				value={currentLanguage}
				placeholder='Language'
			/>
		</Box>
	);
};

export default LanguageDropdown;
