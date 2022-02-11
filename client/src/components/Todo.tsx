import { useState } from 'react';
import { Box, Button, Text } from './index';
import { useTheme } from '@emotion/react';

const Todo = () => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Box
			width={40}
			height={120}
			center
			position='absolute'
			right={1}
			top={250}
			borderRadius='10px'
		>
			<Button
				width='100%'
				height='100%'
				onClick={() => setIsOpen(!isOpen)}
				backgroundColor={theme.color.lightBlue}
				borderRadius='10px'
			>
				<Text typography='heading' color={theme.color.black} textAlign='center'>
					To Do List
				</Text>
			</Button>
			{isOpen && (
				<Box
					width={120}
					height={240}
					center
					position='absolute'
					right={50}
					top={0}
					borderRadius='10px'
					backgroundColor={theme.color.lightBlue}
					zIndex={25}
				>
					{''}
				</Box>
			)}
		</Box>
	);
};

export default Todo;
