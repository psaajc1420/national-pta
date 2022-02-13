import { useQuery } from '@apollo/client';

const useGetQuestion = () => {
	const getQuestion = (query: any) => {
		const { loading, error, data } = useQuery(query);
		return { loading, error, data };
	};
	return {
		getQuestion,
	};
};

export default useGetQuestion;
