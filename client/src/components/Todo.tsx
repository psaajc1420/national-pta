import { useContext, useState } from 'react';
import { Box, Button, Text } from './index';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { QuizAnswersContext } from '../pages/quiz/Quiz';

const Todo = () => {
	// @ts-expect-error
	const { quizState } = useContext(QuizAnswersContext);
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const handleChecked = (index: number | string) => {
		return quizState.todos[index];
	};
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
						{Array.from(Array(5)).map((element, i) => {
							return (
								<Box
									key={i}
									width='75%'
									height='auto'
									display='flex'
									justify='space-between'
									align='center'
									backgroundColor='transperant'
								>
									<StyledCheckbox className='container'>
										<input
											type='checkbox'
											// name={`checkbox-${i}`}
											// onChange={() => handleOnChange(`checkbox-${i}`)}
											checked={handleChecked(i)}
										/>
										<span className='checkmark'></span>
									</StyledCheckbox>
									<StyledInput type='text' disabled />
								</Box>
							);
						})}
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
	width: '200vw',
	height: '200vh',
	backgroundColor: theme.color.black,
	opacity: 0.4,
	zIndex: 998,
}));

const StyledInput = styled('input')(({ theme }) => ({
	border: 'none',
	borderBottom: `2px solid ${theme.color.black}`,
	background: 'none',
}));

const StyledCheckbox = styled('label')(() => ({
	// marginRight: 25,
	display: 'block',
	position: 'relative',
	paddingLeft: '35px',
	marginBottom: '12px',
	cursor: 'pointer',
	fontSize: '20px',
	['-webkit-user-select']: 'none',
	['-moz-user-select']: 'none',
	['-ms-user-select']: 'none',
	['user-select']: 'none',

	input: {
		position: 'absolute',
		opacity: 0,
		cursor: 'pointer',
	},
	span: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '25px',
		width: '25px',
		backgroundColor: '#eee',
		borderRadius: '50%',
	},

	['input:checked ~ .checkmark']: {
		backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='-10 -10 64.56 64.56'%3E%3Cpath d='M23.297 38.74a6.563 6.563 0 0 1-10.16.499L1.308 26.112a5.083 5.083 0 1 1 7.551-6.805l8.369 9.288a.617.617 0 0 0 .956-.047L35.386 5.217a5.083 5.083 0 1 1 8.181 6.032L23.297 38.74z'/%3E%3C/svg%3E")`,
	},
}));
