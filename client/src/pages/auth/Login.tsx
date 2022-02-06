import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useLogin } from './hooks';
import { Box, Button, Layout, Link, Text } from '../../components';
import { AuthInput } from './components';

const Login = () => {
	const theme = useTheme();
	const [username, setUsername] = useState('');
	const [password, setPassord] = useState('');
	const login = useLogin();

	const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);

	const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassord(e.target.value);
	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box width={350} height={500} center backgroundColor='inherit'>
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
							placeholder='Username'
							value={username}
							onChange={handleInputUsername}
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
							<Button
								width={150}
								height={56}
								type='submit'
								onClick={() => login(username, password)}
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
								<Link to='/register'>
									<Text
										typography='subheading'
										textAlign='center'
										color={theme.color.blue}
									>
										Need an account? Sign-up here!
									</Text>
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default Login;
