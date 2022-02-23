import { gql, useMutation } from '@apollo/client';

const UPDATE_USER = gql`
	mutation UpdateUser($inputId: InputID!, $payload: editUserInput!) {
		updateUser(input: { where: $id, data: $payload }) {
			user {
				id
			}
		}
	}
`;

const useBuildProfile = () => {
	const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);
	const buildProfile = (inputId: object, payload: object) => {
		updateUser({ variables: { inputId, payload } });
	};

	return { buildProfile, data, loading, error };
};

export default useBuildProfile;
