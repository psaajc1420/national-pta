import React from 'react';
import styled from '@emotion/styled';
import { Box, Text, Button } from '../../../components';
const RegisterForm = () => {
	return (
		<Box
			width='100%'
			height='100%'
			display='block'
			backgroundColor='transperant'
		>
			<StyledForm>
				<Box
					width='100%'
					height='100%'
					display='flex'
					backgroundColor='transperant'
					padding='0 15px'
				>
					<Box
						width='50%'
						height='100%'
						display='flex'
						flexDirection='column'
						backgroundColor='transperant'
					>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Parent First Name:</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Parent Email:</Text>
								<input type='email' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Password:</Text>
								<input type='password' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>City:</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>State:</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Child First Name:</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Child Age:</Text>
								<input type='text' />
							</Box>
						</label>
					</Box>
					<Box
						width='50%'
						height='100%'
						display='flex'
						flexDirection='column'
						backgroundColor='transperant'
						padding='0 15px'
					>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Race:</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>Ethnicity:</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>
									Primarily Language Spoken at Home:
								</Text>
								<input type='text' />
							</Box>
						</label>
						<label>
							<Box
								width='100%'
								height={48}
								display='flex'
								justify='space-between'
								align='center'
								backgroundColor='transperant'
							>
								<Text typography='subheading'>
									How did you hear about The Smart Talk?:
								</Text>
								<input type='text' />
							</Box>
						</label>
					</Box>
				</Box>
				<Box width='auto' height='auto' center backgroundColor='transperant'>
					<Button width={150} height={48} type='submit' onClick={() => {}}>
						<Text typography='heading' textAlign='center'>
							Submit
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
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}));
