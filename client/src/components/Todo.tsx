import { useState } from 'react';
import { Box, Button, Text } from './index';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const Todo = () => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{isOpen && <StyledOverlay />}
			<Box
				width={40}
				height={120}
				center
				position='absolute'
				right={1}
				top={150}
				borderRadius='10px'
				zIndex={999}
			>
				<Button
					width='100%'
					height='100%'
					onClick={() => setIsOpen(!isOpen)}
					backgroundColor={theme.color.lightBlue}
					borderRadius='10px'
					border='none'
				>
					<Text
						typography='heading'
						color={theme.color.black}
						textAlign='center'
					>
						To Do List
					</Text>
				</Button>
				{isOpen && (
					<TodoList>
						<Box
							width='auto'
							height='auto'
							display='flex'
							justify='flex-start'
							align='center'
							flexDirection='column'
							backgroundColor='transperant'
						>
							<Text
								typography='heading'
								textAlign='center'
								color={theme.color.black}
								size={24}
							>
								To-do List
							</Text>
						</Box>
						<Box
							width='75%'
							height='auto'
							display='flex'
							justify='space-between'
							align='center'
							backgroundColor='transperant'
						>
							<input type='checkbox' />
							<StyledInput type='text' />
						</Box>
						<Box
							width='75%'
							height='auto'
							display='flex'
							justify='space-between'
							align='center'
							backgroundColor='transperant'
						>
							<input type='checkbox' />
							<StyledInput type='text' />
						</Box>
						<Box
							width='75%'
							height='auto'
							display='flex'
							justify='space-between'
							align='center'
							backgroundColor='transperant'
						>
							<input type='checkbox' />
							<StyledInput type='text' />
						</Box>
						<Box
							width='75%'
							height='auto'
							display='flex'
							justify='space-between'
							align='center'
							backgroundColor='transperant'
						>
							<input type='checkbox' />
							<StyledInput type='text' />
						</Box>
						<Box
							width='75%'
							height='auto'
							display='flex'
							justify='space-between'
							align='center'
							backgroundColor='transperant'
						>
							<input type='checkbox' />
							<StyledInput type='text' />
						</Box>
					</TodoList>
				)}
			</Box>
		</>
	);
};

export default Todo;

const TodoList = styled('div')(({ theme }) => ({
	width: 250,
	height: 400,
	padding: '25px 0',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	flexDirection: 'column',
	position: 'absolute',
	right: 50,
	top: 0.1,
	borderRadius: 15,
	background: 'rgba(51, 116, 186, 0.6)',
}));

const StyledOverlay = styled('div')(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
	backgroundColor: theme.color.black,
	opacity: 0.4,
	zIndex: 998,
}));

const StyledInput = styled('input')(({ theme }) => ({
	border: 'none',
	borderBottom: `2px solid ${theme.color.black}`,
	background: 'none',
}));
