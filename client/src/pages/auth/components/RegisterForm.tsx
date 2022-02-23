import { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Text, Button } from '../../../components';
import AuthInput from './AuthInput';
import { useRegister } from '../hooks';
import { AuthContext } from '../../../App';

const RegisterForm = ({
	onHandleNextToDataIntakeForm,
}: {
	onHandleNextToDataIntakeForm: () => void;
}) => {
	// @ts-expect-error
	const { authDispatch } = useContext(AuthContext);
	const theme = useTheme();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [err, setErr] = useState('');

	const { register, data, error } = useRegister();
	console.log({ data, error });

	useEffect(() => {
		if (data?.register) {
			authDispatch({
				type: 'LOGIN',
				payload: {
					jwt: data.register.jwt,
					identifier: data.register.user.username,
				},
			});
			onHandleNextToDataIntakeForm();
		}
		if (error) {
			setErr('There was an error. Please try again.');
		}
	}, [data, error]);

	const handleRegister = () => {
		register(email, password);
	};

	return (
		<Box
			height='60%'
			width={400}
			maxWidth={500}
			center
			flexDirection='column'
			backgroundColor={theme.color.lightBlue}
			padding='2% 5%'
			borderRadius={75}
		>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='transperant'
				margin='0 0 15px 0'
			>
				<Text
					typography='heading'
					color={theme.color.black}
					textAlign='center'
					size={28}
				>
					Register
				</Text>
			</Box>

			<StyledForm>
				<Box
					width='100%'
					height='100%'
					display='flex'
					flexDirection='column'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
					padding='25px 15px'
				>
					<AuthInput
						width='100%'
						height={36}
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type='email'
						placeholder='Email'
					/>
					<AuthInput
						width='100%'
						height={36}
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type='password'
						placeholder='Password'
					/>
					<AuthInput
						width='100%'
						height={36}
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
						type='password'
						placeholder='Confirm Password'
					/>
				</Box>

				<Box width='auto' height='auto' center backgroundColor='transperant'>
					{err && (
						<Box
							width='auto'
							height='auto'
							center
							backgroundColor='transperant'
						>
							<Text
								typography='subheading'
								textAlign='center'
								color={theme.color.red}
							>
								{err}
							</Text>
						</Box>
					)}
					<Button
						width={150}
						height={48}
						type='submit'
						backgroundColor={theme.color.blue}
						onClick={handleRegister}
					>
						<Text typography='heading' textAlign='center'>
							Next &gt;
						</Text>
					</Button>
				</Box>
			</StyledForm>
		</Box>
	);
};

export default RegisterForm;

const StyledForm = styled('form')(() => ({
	width: '100%',
	height: '60%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
}));
