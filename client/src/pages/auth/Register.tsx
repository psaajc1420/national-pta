import { Box, Button, Layout, Link, Text } from '../../components';
import { useTheme } from '@emotion/react';
// import { AuthInput } from './components';

const Register = () => {
	const theme = useTheme();
	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box width={500} height={350} center backgroundColor='inherit'>
					<Box
						width='100%'
						height={350}
						display='flex'
						flexDirection='row'
						justify='space-around'
						align='center'
						backgroundColor='inherit'
					>
						<Text typography='heading' size={36} color={theme.color.black}>
							Welcome to the Smart Talk!
						</Text>
						<Box
							width='100%'
							height='100%'
							display='flex'
							justify='space-around'
							align='center'
							flexDirection='column'
							backgroundColor='inherit'
						>
							{/* <AuthInput type='text' placeholder='Email' />
							<AuthInput type='text' placeholder='First Name' />
							<AuthInput type='password' placeholder='Password' /> */}
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
									onClick={() => {}}
								>
									<Text
										typography='subheading'
										textAlign='center'
										color={theme.color.white}
									>
										Register
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
									<Link to='/login'>
										<Text
											typography='subheading'
											textAlign='center'
											color={theme.color.blue}
										>
											Already have an account? Login here!
										</Text>
									</Link>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default Register;
