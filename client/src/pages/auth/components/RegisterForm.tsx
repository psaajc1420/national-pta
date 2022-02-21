import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Text, Button } from '../../../components';
import AuthInput from './AuthInput';

const RegisterForm = () => {
	const theme = useTheme();
	return (
		<Box
			height='80%'
			width={500}
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
				margin='0 0 25px 0'
			>
				<Text
					typography='heading'
					color={theme.color.black}
					textAlign='center'
					size={28}
				>
					Build Your Profile!
				</Text>
				<Text typography='text' color={theme.color.black} textAlign='center'>
					This information will not be shared with anyone. It will only be used
					to create a personalized Smart Talk family experience, allow you to
					save your family conversations, and return to them year-after-year.
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='transperant'
				margin='0 0 15px 0'
			>
				<Text typography='heading' color={theme.color.black} textAlign='center'>
					Required Information
				</Text>
			</Box>
			<StyledForm>
				<Box
					width='100%'
					height='auto'
					display='flex'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
					padding='0 15px'
				>
					<AuthInput
						width='40%'
						height={36}
						onChange={() => {}}
						value=''
						type='text'
						placeholder='Parent or Caregiver Name'
					/>
					<AuthInput
						width='40%'
						height={36}
						onChange={() => {}}
						value=''
						type='text'
						placeholder="Child's Name"
					/>
					<AuthInput
						width='10%'
						height={36}
						onChange={() => {}}
						value=''
						type='text'
						placeholder='Age'
					/>
				</Box>
				<Box
					width='100%'
					height={150}
					display='flex'
					flexDirection='column'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
					padding='0 15px'
				>
					<AuthInput
						width='100%'
						height={36}
						onChange={() => {}}
						value=''
						type='email'
						placeholder='Email'
					/>
					<AuthInput
						width='100%'
						height={36}
						onChange={() => {}}
						value=''
						type='password'
						placeholder='Password'
					/>
					<Box
						width='100%'
						height='auto'
						display='flex'
						justify='space-between'
						align='center'
						backgroundColor='transperant'
					>
						<AuthInput
							width='45%'
							height={36}
							onChange={() => {}}
							value=''
							type='text'
							placeholder='City'
						/>
						<AuthInput
							width='45%'
							height={36}
							onChange={() => {}}
							value=''
							type='text'
							placeholder='State'
						/>
					</Box>
				</Box>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='transperant'
					margin='15px 0 5px 0'
				>
					<Text
						typography='heading'
						color={theme.color.black}
						textAlign='center'
					>
						Optional Information
					</Text>
				</Box>
				<Box
					width='100%'
					height={150}
					display='flex'
					flexDirection='column'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
					padding='0 15px'
				>
					<Box
						width='100%'
						height='auto'
						display='flex'
						justify='space-between'
						align='center'
						backgroundColor='transperant'
					>
						<AuthInput
							width='45%'
							height={36}
							onChange={() => {}}
							value=''
							type='text'
							placeholder='Race'
						/>
						<AuthInput
							width='45%'
							height={36}
							onChange={() => {}}
							value=''
							type='text'
							placeholder='Ethnicity'
						/>
					</Box>
					<AuthInput
						width='100%'
						height={36}
						onChange={() => {}}
						value=''
						type='text'
						placeholder='Primary language spoken in your home?'
					/>
					<AuthInput
						width='100%'
						height={36}
						onChange={() => {}}
						value=''
						type='text'
						placeholder='How did you hear about The Smart Talk'
					/>
				</Box>
				<Box width='auto' height='auto' center backgroundColor='transperant'>
					<Button
						width={150}
						height={48}
						type='submit'
						backgroundColor={theme.color.blue}
						onClick={() => {}}
					>
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
	justifyContent: 'space-between',
}));
