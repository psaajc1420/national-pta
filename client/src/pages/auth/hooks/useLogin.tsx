import { gql, useMutation } from '@apollo/client';

const POST_LOGIN = gql`
	mutation PostLogin($email: String!, $password: String!) {
		login(input: { identifier: $email, password: $password }) {
			jwt
		}
	}
`;

const useLogin = () => {
	const [postLogin, { data, loading, error }] = useMutation(POST_LOGIN);
	// console.log({ data, loading, error });
	const login = (email: string, password: string) => {
		// console.log({ email, password });
		postLogin({ variables: { email, password } });
	};

	return { login, data, loading, error };
};

export default useLogin;
