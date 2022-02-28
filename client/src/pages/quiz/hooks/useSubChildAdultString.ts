import { useContext } from 'react';
import { QuizAnswersContext } from '../Quiz';

const useSubChildAdultString = () => {
	// @ts-expect-error
	const { quizState } = useContext(QuizAnswersContext);
	const parseText = (text: string) => {
		return text
			.replaceAll('(ADULT)', quizState.parentName)
			.replaceAll('(CHILD)', quizState.childName);
	};

	return parseText;
};

export default useSubChildAdultString;
