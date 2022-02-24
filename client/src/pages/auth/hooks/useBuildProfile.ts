import { gql, useMutation } from '@apollo/client';

const UPDATE_USER = gql`
	mutation UpdateUser($inputId: InputID!, $payload: editUserInput!) {
		updateUser(input: { where: $inputId, data: $payload }) {
			user {
				id
			}
		}
	}
`;

const useBuildProfile = () => {
	const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);
	console.log({ data, loading, error });
	const buildProfile = (inputId: any, payload: any) => {
		updateUser({ variables: { inputId, payload } });
	};
	return { buildProfile, data, loading, error };
};

export default useBuildProfile;
