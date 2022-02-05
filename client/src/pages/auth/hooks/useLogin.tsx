import { gql, useMutation } from '@apollo/client';

const POST_LOGIN = gql`
	mutation PostLogin($username: String!, $password: String!) {
		auth {
			local(identifier: $username, password: $password)
		}
	}
`;

const useLogin = () => {
	const [postLogin, { data, loading, error }] = useMutation(POST_LOGIN);
	console.log({ data, loading, error });
	const login = (username: string, password: string) => {
		console.log({ username, password });
		postLogin({ variables: { username, password } });
	};

	return login;
};

export default useLogin;
