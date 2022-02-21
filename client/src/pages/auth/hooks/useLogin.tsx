import { gql, useMutation } from '@apollo/client';

const POST_LOGIN = gql`
	mutation PostLogin($email: String!, $password: String!) {
		login(input: { identifier: $email, password: $password }) {
			jwt
			user {
				username
				email
			}
		}
	}
`;

const useLogin = () => {
	const [postLogin, { data, loading, error }] = useMutation(POST_LOGIN);
	const login = (email: string, password: string) => {
		postLogin({ variables: { email, password } });
	};
	return { login, data, loading, error };
};

export default useLogin;
