import { gql, useQuery } from '@apollo/client';

const GET_ME = gql`
	query {
		me {
			user {
				id
				username
				email
				name
				is_registered
				city
				state
				ethnicity
				primary_lang
				children {
					name
					age
				}
			}
		}
	}
`;
const useGetUser = () => {
	const { data, loading, error } = useQuery(GET_ME);
	return { data, loading, error };
};

export default useGetUser;
