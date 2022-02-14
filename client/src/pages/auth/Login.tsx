import React, { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { useLogin } from './hooks';
import { Box, Button, Layout, Link, Text } from '../../components';
import { AuthInput } from './components';

const Login = () => {
	const theme = useTheme();
	const [email, setEmail] = useState('');
	const [password, setPassord] = useState('');
	const [isButtonDisabled, setButtonDisabled] = useState(true);
	const [error, setError] = useState('');
	const { login } = useLogin();

	useEffect(() => {
		if (email.length < 8 || password.length < 8) {
			setButtonDisabled(true);
		} else {
			setButtonDisabled(false);
		}
	}, [email, password]);

	const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassord(e.target.value);

	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box
					width={350}
					maxWidth={350}
					height={500}
					center
					backgroundColor={theme.color.lightBlue}
					padding='10px 5%'
					borderRadius={75}
				>
					<Box
						width='100%'
						height={350}
						display='flex'
						flexDirection='column'
						justify='space-around'
						align='center'
						backgroundColor='inherit'
						zIndex={1}
					>
						<Text typography='heading' size={36} color={theme.color.black}>
							Welcome Back!
						</Text>
						<AuthInput
							type='text'
							placeholder='Email'
							value={email}
							onChange={handleInputEmail}
						/>
						<AuthInput
							type='password'
							placeholder='Password'
							value={password}
							onChange={handleInputPassword}
						/>
						<Box
							width='auto'
							height='auto'
							center
							flexDirection='column'
							backgroundColor='inherit'
						>
							{error && (
								<Text
									typography='subheading'
									textAlign='center'
									color={theme.color.red}
								>
									{error}
								</Text>
							)}
							<Button
								width={150}
								height={56}
								type='submit'
								disabled={isButtonDisabled}
								onClick={() =>
									isButtonDisabled
										? setError('Email or Password is incomplete. Please Revise')
										: login(email, password)
								}
							>
								<Text
									typography='subheading'
									textAlign='center'
									color={theme.color.white}
								>
									Login
								</Text>
							</Button>
							<Box
								width='auto'
								height='auto'
								display='block'
								backgroundColor='inherit'
								margin='15px 0'
								zIndex={1}
							>
								<Text
									typography='subheading'
									textAlign='center'
									color={theme.color.black}
								>
									Don&apos;t have an account?
									<Link to='/register'> Sign up</Link>
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default Login;
