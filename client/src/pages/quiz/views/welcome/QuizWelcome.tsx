import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Button, Text } from '../../../../components';
import { CategoryButton } from '../../components';

const AGE_GROUPS = [
	{
		id: 1,
		ageGroup: '5-8',
		color: 'red',
	},
	{
		id: 2,
		ageGroup: '9-11',
		color: 'orange',
	},
	{
		id: 3,
		ageGroup: '12-14',
		color: 'green',
	},
	{
		id: 4,
		ageGroup: '15-18',
		color: 'lightBlue',
	},
];

const QuizWelcome = ({ beginQuizGuest }: { beginQuizGuest: () => void }) => {
	const theme = useTheme();
	return (
		<Box
			width='100%'
			height='75%'
			display='flex'
			justify='space-around'
			align='center'
			flexDirection='column'
			backgroundColor='transparent'
		>
			<Box width='100%' height={75} center backgroundColor='inherit'>
				<Text typography='subheading' size={24} color={theme.color.black}>
					Welcome,
					<StyledWelcomeInput type='text' />
					and
					<StyledWelcomeInput type='text' />. <br />
					Are you ready to have Smart Talk?
				</Text>
			</Box>
			<Box
				width='75%'
				height={75}
				display='flex'
				flexDirection='row'
				justify='space-around'
				align='center'
				backgroundColor='inherit'
			>
				{AGE_GROUPS.map((e) => (
					<CategoryButton key={e.id} bgColor={e.color} onClick={() => {}}>
						<Text typography='heading' color={theme.color.white}>
							{e.ageGroup}
						</Text>
					</CategoryButton>
				))}
			</Box>
			<Button width={150} height={56} onClick={beginQuizGuest}>
				<Text typography='heading' textAlign='center' color={theme.color.white}>
					Let&apos;s Get Started
				</Text>
			</Button>
		</Box>
	);
};

export default QuizWelcome;

const StyledWelcomeInput = styled('input')(() => ({
	border: 'none',
	borderBottom: '1px solid black',
}));
