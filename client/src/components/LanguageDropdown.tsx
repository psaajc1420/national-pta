import React from 'react';
import { Box, Button, Text } from './index';
import { useTheme } from '@emotion/react';
const LanguageDropdown = () => {
	const theme = useTheme();
	const [currentLanguage, setCurrentLanguage] = React.useState('');
	const [isOpen, setIsOpen] = React.useState(false);

	const setLanguage = ({ language }: { language: string }) => {
		setCurrentLanguage(language);
		setIsOpen(false);
	};

	return (
		<Box
			width={150}
			height={56}
			center
			flexDirection='column'
			backgroundColor='inherit'
		>
			<Box
				width='100%'
				height='100%'
				border={`2px solid ${theme.color.black}`}
				backgroundColor='inherit'
				center
			>
				<Text typography='subheading' color={theme.color.black}>
					{!currentLanguage ? 'Language' : currentLanguage}
				</Text>
				<Box
					width='auto'
					height='auto'
					backgroundColor='inherit'
					display='block'
					zIndex={1000}
				>
					<Button
						onClick={() => setIsOpen(!isOpen)}
						width={25}
						height={25}
						backgroundColor={isOpen ? theme.color.blue : theme.color.red}
					>
						{''}
					</Button>
				</Box>
			</Box>
			{isOpen && (
				<Box
					width={150}
					height={115}
					center
					flexDirection='column'
					backgroundColor='inherit'
					display='block'
					position='absolute'
					top={56}
					zIndex={999}
				>
					<Button
						width='100%'
						height='100%'
						onClick={() => setLanguage({ language: 'English' })}
						backgroundColor='inherit'
					>
						<Text
							typography='subheading'
							textAlign='center'
							color={theme.color.black}
						>
							English
						</Text>
					</Button>

					<Button
						width='100%'
						height='100%'
						onClick={() => setLanguage({ language: 'Spanish' })}
						backgroundColor='inherit'
					>
						<Text
							typography='subheading'
							textAlign='center'
							color={theme.color.black}
						>
							Spanish
						</Text>
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default LanguageDropdown;
