import { useEffect } from 'react';
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
	const buildProfile = (inputId: any, payload: any) => {
		updateUser({ variables: { inputId, payload } });
	};
	useEffect(() => {
		if (data?.updateUser?.user?.id) {
			window.location.reload();
		}
	}, [data?.updateUser?.user?.id]);
	return { buildProfile, data, loading, error };
};

export default useBuildProfile;
