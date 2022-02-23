import { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Text, Button } from '../../../components';
import AuthInput from './AuthInput';

const DataIntakeForm = () => {
	const theme = useTheme();
	const [parentName, setParentName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [childName, setChildName] = useState('');
	const [childAge, setChildAge] = useState('');
	const [race, setRace] = useState('');
	const [ethnicity, setEthnicity] = useState('');
	const [primaryLang, setPrimaryLang] = useState('');
	const [howDidYouHear, setHowDidYouHear] = useState('');
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
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='transperant'
					margin='5px 0 0 0'
				>
					<Text typography='text' color={theme.color.black} textAlign='center'>
						This information will not be shared with anyone. It will only be
						used to create a personalized Smart Talk family experience, allow
						you to save your family conversations, and return to them
						year-after-year.
					</Text>
				</Box>
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
					height={175}
					display='flex'
					flexDirection='column'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
					padding='0 15px'
				>
					<AuthInput
						width='98%'
						height={36}
						onChange={(e) => setParentName(e.target.value)}
						value={parentName}
						type='text'
						placeholder='Parent or Caregiver First Name'
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
							onChange={(e) => setCity(e.target.value)}
							value={city}
							type='text'
							placeholder='City'
						/>
						<AuthInput
							width='45%'
							height={36}
							onChange={(e) => setState(e.target.value)}
							value={state}
							type='text'
							placeholder='State'
						/>
					</Box>
					<Box
						width='100%'
						height={50}
						display='flex'
						justify='space-between'
						align='center'
						backgroundColor='transperant'
					>
						<AuthInput
							width='80%'
							height={36}
							onChange={(e) => setChildName(e.target.value)}
							value={childName}
							type='text'
							placeholder="Child's First Name"
						/>
						<AuthInput
							width='10%'
							height={36}
							onChange={(e) => setChildAge(e.target.value)}
							value={childAge}
							type='text'
							placeholder='Age'
						/>
					</Box>
				</Box>

				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='transperant'
					margin='15px 0'
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
					height={175}
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
							onChange={(e) => setRace(e.target.value)}
							value={race}
							type='text'
							placeholder='Race'
						/>
						<AuthInput
							width='45%'
							height={36}
							onChange={(e) => setEthnicity(e.target.value)}
							value={ethnicity}
							type='text'
							placeholder='Ethnicity'
						/>
					</Box>
					<AuthInput
						width='98%'
						height={36}
						onChange={(e) => setPrimaryLang(e.target.value)}
						value={primaryLang}
						type='text'
						placeholder='Primary language spoken in your home?'
					/>
					<AuthInput
						width='98%'
						height={36}
						onChange={(e) => setHowDidYouHear(e.target.value)}
						value={howDidYouHear}
						type='text'
						placeholder='How did you hear about The Smart Talk'
					/>
				</Box>
				<Box
					width='auto'
					height='auto'
					center
					backgroundColor='transperant'
					margin='15px 0 0 0'
				>
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

export default DataIntakeForm;

const StyledForm = styled('form')(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
}));
