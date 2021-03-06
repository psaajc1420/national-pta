import { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';

const POST_REGISTER = gql`
	mutation PostRegister(
		$username: String!
		$email: String!
		$password: String!
	) {
		register(
			input: { username: $username, email: $email, password: $password }
		) {
			jwt
		}
	}
`;

const useRegister = () => {
	const [postRegister, { data, loading, error }] = useMutation(POST_REGISTER);
	const register = (email: string, password: string) => {
		postRegister({ variables: { username: email, email, password } });
	};

	return { register, data, loading, error };
};

export default useRegister;
