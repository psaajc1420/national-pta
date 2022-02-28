// @ts-nocheck
import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { Box, Text } from '../../../components';
import { QuizAnswersContext } from '../Quiz';
import {
	RevisedCheckboxes,
	RevisedYesNo,
	RevisedFillInTheBlank,
	RevisedSlider,
} from '.';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useSubChildAdultString } from '../hooks';

const GET_SLIDE = gql`
	query GetSlide($id: ID!) {
		slide(id: $id) {
			slide_number
			header
			questions {
				id
				text
				order_id
				question_type {
					id
					name
				}
				answers {
					id
					text
				}
			}
		}
	}
`;

const TestQuestion = ({ slideId }: { slideId: string | number }) => {
	// @ts-expect-error
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);
	const theme = useTheme();
	// const { questionData, error, loading } = useGetSlide(slideId);
	const { loading, error, data } = useQuery(GET_SLIDE, {
		variables: { id: slideId },
	});

	const [questions, setQuestions] = useState([]);
	const [selectedAnswers, setSelectedAnswers] = useState({});
	const parseText = useSubChildAdultString();

	// console.log({ loading, error, data });

	useEffect(() => {
		if (data?.slide?.questions) {
			const sortedQuestionsByOrderId = data?.slide?.questions
				?.slice()
				.sort(
					(a: any, b: any) => parseFloat(a.order_id) - parseFloat(b.order_id),
				);
			setQuestions(sortedQuestionsByOrderId);
		}
	}, [data?.slide?.questions]);

	useEffect(() => {
		if (slideId) {
			quizDispatch({
				type: 'SET_SLIDE_ANSWER',
				payload: { slideId: slideId, value: selectedAnswers },
			});
		}
	}, [selectedAnswers]);

	const handleOnSetSelectedAnswer = (answer: any) => {
		setSelectedAnswers((state) => ({
			...state,
			[answer.question_id]: answer,
		}));
	};

	if (loading)
		return (
			<Box width='100%' height='100%' center backgroundColor='transperant'>
				<BallTriangle color={theme.color.blue} height={150} width={150} />;
			</Box>
		);
	console.log({ data });
	return (
		<>
			{data.slide.header && (
				<Box
					width='100%'
					height='auto'
					center
					backgroundColor='transperant'
					margin='5px 0 15px 0'
				>
					<Text typography='subheading' size={18} textAlign='center'>
						{parseText(data.slide.header)}
					</Text>
				</Box>
			)}
			{questions.map((question: any, i: any) => {
				const questionType = question.question_type.name;
				// const currentSelectedAnswers =
				// 	quizState.selected_answers[slideId][question.id];
				// console.log({ currentSelectedAnswers });
				if (questionType === 'checkboxes') {
					return (
						<RevisedCheckboxes
							key={i}
							question={question}
							onSetAnswer={handleOnSetSelectedAnswer}
						>
							CHECKBOXES
						</RevisedCheckboxes>
					);
				} else if (questionType === 'yes-no') {
					return (
						<RevisedYesNo
							key={i}
							question={question}
							onSetAnswer={handleOnSetSelectedAnswer}
						/>
					);
				} else if (questionType === 'fill-in-blank') {
					return (
						<RevisedFillInTheBlank
							key={i}
							question={question}
							onSetAnswer={handleOnSetSelectedAnswer}
						/>
					);
				} else if (questionType === 'slider') {
					return (
						<RevisedSlider
							key={i}
							question={question}
							onSetAnswer={handleOnSetSelectedAnswer}
						/>
					);
				} else {
					return <div key={i}>HELLO</div>;
				}
			})}
		</>
	);
};

export default TestQuestion;
