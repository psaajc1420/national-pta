import { gql, useMutation } from '@apollo/client';

const CREATE_CHILD = gql`
	mutation CreateChild($name: String!, $age: Int!, $user_id: ID!) {
		createChild(
			input: {
				data: { name: $name, age: $age, users_permissions_user: $user_id }
			}
		) {
			child {
				name
				age
				users_permissions_user {
					id
					email
				}
			}
		}
	}
`;

const useCreateChild = () => {
	const [postCreateChild, { data, loading, error }] = useMutation(CREATE_CHILD);
	const createChild = (
		name: string,
		age: string | number,
		userId: string | number,
	) => {
		postCreateChild({ variables: { name, age, user_id: userId } });
	};

	return { createChild, data, loading, error };
};

export default useCreateChild;
