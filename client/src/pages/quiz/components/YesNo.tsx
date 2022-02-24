import { useContext } from 'react';
import { Box, Text } from '../../../components/index';
import { QuizAnswersContext } from '../Quiz';
import { AuthContext } from '../../../App';

const YesNo = ({ questions }: { questions: any }) => {
	// @ts-expect-error
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);
	// @ts-expect-error
	const { authState } = useContext(AuthContext);

	const handleYesChecked = (id: number | string) => {
		if (quizState.answers[id] === undefined) {
			return null;
		}
		return quizState.answers[id];
	};
	const handleNoChecked = (id: number | string) => {
		if (quizState.answers[id] === undefined) {
			return null;
		}
		return !quizState.answers[id];
	};
	const handleYesAnswer = (id: number | string) => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: id, value: true },
		});
	};
	const handleNoAnswer = (id: number | string) => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: id, value: false },
		});
	};

	return (
		<Box
			width='100%'
			height='100%'
			display='flex'
			justify='space-around'
			align='center'
			backgroundColor='transperant'
		>
			<Box
				width='auto'
				height='100%'
				display='flex'
				flexDirection='column'
				justify='space-around'
				backgroundColor='transperant'
			>
				{questions.map((e: any) => (
					<Text key={e.id} typography='text' size={16}>
						{e.text
							.replace(
								'(CHILD)',
								quizState.guestChild ||
									(authState.user?.children &&
										authState.user?.children[0]?.name) ||
									'CHILD',
							)
							.replace(
								'(ADULT)',
								quizState.guestAdult ||
									(authState.user && authState.user?.name) ||
									'ADULT',
							)}
					</Text>
				))}
			</Box>

			<Box
				width={150}
				height='100%'
				display='flex'
				flexDirection='row'
				justify='center'
				align='center'
				backgroundColor='transperant'
			>
				<Box
					width='100%'
					height='100%'
					display='flex'
					flexDirection='column'
					justify='space-around'
					align='center'
					backgroundColor='transperant'
					position='relative'
				>
					<Box
						width='auto'
						height='auto'
						center
						backgroundColor='transperant'
						position='absolute'
						top={-8}
						right={0}
					>
						<Text typography='subheading'>YES</Text>
					</Box>
					{questions.map((e: any) => (
						<input
							key={e.id}
							type='radio'
							id={e.id}
							checked={handleYesChecked(e.id)}
							onChange={() => handleYesAnswer(e.id)}
						/>
					))}
				</Box>
				<Box
					width='100%'
					height='100%'
					display='flex'
					flexDirection='column'
					justify='space-around'
					align='center'
					backgroundColor='transperant'
				>
					<Box
						width='auto'
						height='auto'
						center
						backgroundColor='transperant'
						position='absolute'
						top={-8}
						right={0}
					>
						<Text typography='subheading'>NO</Text>
					</Box>
					{questions.map((e: any) => (
						<input
							key={e.id}
							type='radio'
							id={e.id}
							// @ts-expect-error
							checked={handleNoChecked(e.id)}
							onChange={() => handleNoAnswer(e.id)}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default YesNo;
