import { useState } from 'react';
import { Box, Button, Layout, Link, Text } from '../../components';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ReactTooltip from 'react-tooltip';
import { RegisterForm } from './components';

const Register = () => {
	const theme = useTheme();
	const [view, setView] = useState('default');
	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box
					width='75%'
					maxWidth={1000}
					height={350}
					center
					flexDirection='column'
					backgroundColor={theme.color.lightBlue}
					padding='5%'
					borderRadius={75}
				>
					{view === 'default' ? (
						<>
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
								<Box
									width='100%'
									height='100%'
									center
									backgroundColor='inherit'
								>
									<Text typography='text' size={16} color={theme.color.black}>
										Creating an account gives users full access to the Smart
										Talk tool including:
										<StyledUl>
											<li>
												Questions that facilitate positive technology
												discussions within families
											</li>
											<li>Educational resources</li>
											<li>
												A personalized family techonology agreement that is
												created based on individual responses
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
												onClick={() => setView('register')}
												// backgroundColor={theme.color.lightBlue}
												border={`3px solid ${theme.color.blue}`}
											>
												<Text typography='heading' textAlign='center'>
													Create Account
												</Text>
											</Button>
										</Box>
										<div data-tip data-for='guest-warning'>
											<Link to='/quiz'>
												<Button
													width={250}
													height={46}
													type='submit'
													onClick={() => {}}
													backgroundColor={theme.color.blue}
												>
													<Text typography='heading' textAlign='center'>
														Continue as Guest
													</Text>
													<ReactTooltip
														id='guest-warning'
														place='bottom'
														multiline={true}
														backgroundColor={theme.color.blue}
													>
														<Text typography='text' textAlign='center'>
															As a guest, you can create and print your family
															<br />
															agreement, but you won&apos;t be able to save it.
															<br /> As your family&apos;s needs grow, creating
															a profile <br /> will help keep the conversation
															going.
														</Text>
													</ReactTooltip>
												</Button>
											</Link>
										</div>
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
						</>
					) : (
						<RegisterForm />
					)}
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
