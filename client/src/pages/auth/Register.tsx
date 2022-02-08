import { Box, Button, Layout, Link, Text } from '../../components';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const Register = () => {
	const theme = useTheme();
	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box
					width='75%'
					height={350}
					center
					flexDirection='column'
					backgroundColor={theme.color.lightBlue}
					padding='5%'
					borderRadius={75}
				>
					<Text
						typography='heading'
						size={36}
						color={theme.color.black}
						textAlign='center'
					>
						Would you like to create an account?
					</Text>
					<Box
						width='100%'
						height={350}
						display='flex'
						flexDirection='row'
						justify='space-around'
						align='center'
						backgroundColor='inherit'
						margin='15px 0 0 0'
					>
						<Box width='100%' height='100%' center backgroundColor='inherit'>
							<Text typography='text' size={16} color={theme.color.black}>
								Creating an account gives users full access to the Smart Talk
								tool including:
								<StyledUl>
									<li>
										Questions that facilitate positive technology discussions
										within families
									</li>
									<li>Educational resources</li>
									<li>
										A personalized family techonology agreement that is created
										based on individual responses
									</li>
								</StyledUl>
							</Text>
						</Box>
						<Box
							width={4}
							height='100%'
							display='block'
							border={`1px solid ${theme.color.blue}`}
							borderRadius={25}
							margin='0 0 0 15px'
						></Box>
						<Box
							width='100%'
							height='100%'
							display='flex'
							justify='space-around'
							align='center'
							flexDirection='column'
							backgroundColor='inherit'
						>
							<Box
								width='auto'
								height='auto'
								center
								flexDirection='column'
								backgroundColor='inherit'
							>
								<Box
									width='auto'
									height='auto'
									display='block'
									backgroundColor='inherit'
									margin='15px 0 25px 0'
								>
									<Button
										width={250}
										height={46}
										type='submit'
										onClick={() => {}}
										backgroundColor={theme.color.lightBlue}
										border={`3px solid ${theme.color.blue}`}
									>
										<Text
											typography='heading'
											textAlign='center'
											color={theme.color.black}
										>
											Create Account
										</Text>
									</Button>
								</Box>
								<Link to='/quiz'>
									<Button
										width={250}
										height={46}
										type='submit'
										onClick={() => {}}
									>
										<Text
											typography='heading'
											textAlign='center'
											color={theme.color.white}
										>
											Continue as Guest
										</Text>
									</Button>
								</Link>
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
										Already have an account?
										<Link to='/login'> Log in</Link>
									</Text>
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

const StyledUl = styled('ul')(() => ({
	listStyleType: 'disc',
	listStylePosition: 'outside',
	margin: '15px 0 0 20px',
}));
