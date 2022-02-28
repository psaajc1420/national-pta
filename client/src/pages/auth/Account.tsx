import { useContext, useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Redirect } from 'react-router';
import { Box, Text, Button } from '../../components';
import AuthInput from './components/AuthInput';
import { useBuildProfile, useLogout } from './hooks';
import { useCreateChild } from '../../hooks';
import { AuthContext } from '../../App';

const accountInitialState = {
	parentName: '',
	city: '',
	state: '',
	children: [],
	race: '',
	ethnicity: '',
	primaryLang: '',
};

const accountReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				parentName: action.payload.parentName,
				city: action.payload.city,
				state: action.payload.state,
				children: action.payload.children,
				race: action.payload.race,
				ethnicity: action.payload.ethnicity,
				primaryLang: action.payload.primaryLang,
			};
		case 'SET_PARENT_NAME':
			return { parentName: action.payload };
		case 'SET_CITY':
			return { city: action.payload };
		case 'SET_STATE':
			return { state: action.payload };
		case 'SET_RACE':
			return { race: action.payload };
		case 'SET_ETHNICITY':
			return { ethnicity: action.payload };
		case 'SET_PRIMARY_LANG':
			return { primaryLang: action.payload };
		case 'SET_CHILDREN':
			return {};
		case 'RESET':
			return { accountInitialState };
		default:
			throw new Error();
	}
};

const Account = () => {
	// @ts-expect-error
	const { authState } = useContext(AuthContext);
	const theme = useTheme();
	const [accountState, accountDispatch] = useReducer(
		accountReducer,
		accountInitialState,
	);
	const { logout } = useLogout();
	const { buildProfile } = useBuildProfile();
	const { createChild } = useCreateChild();

	useEffect(() => {
		if (authState.user.name) {
			accountDispatch({
				type: 'SET_USER',
				payload: {
					parentName: authState.user.name,
					city: authState.user.city,
					state: authState.user.state,
					children: authState.user.children,
					// race: authState.user.race,
					ethnicity: authState.user.ethnicity,
					primaryLang: authState.user.primary_lang,
				},
			});
		}
	}, [authState]);

	const handleSubmit = () => {
		buildProfile(
			{ id: authState.user.id },
			{
				name: accountState.parentName,
				city: accountState.city,
				state: accountState.state,
				race: accountState.race,
				ethnicity: accountState.ethnicity,
				primary_lang: accountState.primaryLang,
				is_registered: true,
				// hear_about: howDidYouHear,
			},
		);
		// createChild(childName, Number(childAge), authState.user.id);
	};
	console.log({ accountState, authState });
	return (
		<>
			{authState.loggedIn ? (
				<Box width='100%' height='100%' center backgroundColor='transperant'>
					<Box
						height='100%'
						maxHeight={700}
						width={500}
						center
						flexDirection='column'
						backgroundColor={theme.color.lightBlue}
						padding='2% 5%'
						margin='0 0 25px 0'
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
								Account Management
							</Text>
						</Box>

						<Box
							width='100%'
							height='auto'
							center
							backgroundColor='transperant'
							margin='0 0 25px 0'
						>
							<Button
								width={150}
								height={48}
								backgroundColor={theme.color.blue}
								onClick={logout}
							>
								<Text typography='heading' textAlign='center'>
									Logout
								</Text>
							</Button>
						</Box>

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
							>
								Update Profile Information Below
							</Text>
						</Box>
						<StyledForm>
							<Box
								width='100%'
								height='100%'
								display='flex'
								flexDirection='column'
								justify='space-around'
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
									<label htmlFor='parent'>
										<Text typography='subheading'>Parent Name:</Text>
									</label>
									<AuthInput
										width='75%'
										height={36}
										onChange={(e) =>
											accountDispatch({
												type: 'SET_PARENT',
												payload: e.target.value,
											})
										}
										value={accountState.parentName}
										type='text'
										name='parent'
										placeholder=''
									/>
								</Box>

								<Box
									width='100%'
									height='auto'
									display='flex'
									justify='space-between'
									align='center'
									backgroundColor='transperant'
								>
									<label htmlFor='parent'>
										<Text typography='subheading'>Location:</Text>
									</label>
									<AuthInput
										width='40%'
										height={36}
										onChange={(e) =>
											accountDispatch({
												type: 'SET_CITY',
												payload: e.target.value,
											})
										}
										value={accountState.city}
										type='text'
										placeholder=''
									/>
									<AuthInput
										width='40%'
										height={36}
										onChange={(e) =>
											accountDispatch({
												type: 'SET_STATE',
												payload: e.target.value,
											})
										}
										value={accountState.state}
										type='text'
										placeholder=''
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
									<label htmlFor='name'>
										<Text typography='subheading'>Children:</Text>
									</label>
									<Box
										width='80%'
										height='auto'
										display='flex'
										flexDirection='column'
										backgroundColor='transperant'
									>
										{accountState.children.map((e: any, i: any) => {
											return (
												<Box
													key={i}
													width='100%'
													height='auto'
													display='flex'
													justify='space-between'
													align='center'
													backgroundColor='transperant'
													margin='0 0 10px 0'
												>
													<AuthInput
														width='70%'
														height={36}
														// onChange={(e) => setChildName(e.target.value)}
														onChange={() => {}}
														value={e.name}
														type='text'
														name='child'
														placeholder="Child's First Name"
													/>
													<AuthInput
														width='10%'
														height={36}
														// onChange={(e) => setChildAge(e.target.value)}
														onChange={() => {}}
														value={e.age}
														type='text'
														placeholder='Age'
													/>
												</Box>
											);
										})}
									</Box>
								</Box>

								<Box
									width='100%'
									height='auto'
									display='flex'
									justify='space-between'
									align='center'
									backgroundColor='transperant'
								>
									<label htmlFor='race'>
										<Text typography='subheading'>Race & Ethnicity:</Text>
									</label>
									<AuthInput
										width='35%'
										height={36}
										onChange={(e) =>
											accountDispatch({
												type: 'SET_RACE',
												payload: e.target.value,
											})
										}
										value={accountState.race}
										type='text'
										name='race'
										placeholder='Race'
									/>
									<AuthInput
										width='35%'
										height={36}
										onChange={(e) =>
											accountDispatch({
												type: 'SET_ETHNICITY',
												payload: e.target.value,
											})
										}
										value={accountState.ethnicity}
										type='text'
										placeholder='Ethnicity'
									/>
								</Box>
								<Box
									width='100%'
									height='auto'
									display='flex'
									justify='space-between'
									align='center'
									backgroundColor='transperant'
								>
									<label htmlFor='primary-language'>
										<Text typography='subheading'>Primary Language:</Text>
									</label>
									<AuthInput
										width='98%'
										height={36}
										onChange={(e) =>
											accountDispatch({
												type: 'SET_PRIMARY_LANG',
												payload: e.target.value,
											})
										}
										value={accountState.primaryLang}
										type='text'
										name='primary-language'
										placeholder='Primary language spoken in your home?'
									/>
								</Box>
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
									onClick={handleSubmit}
								>
									<Text typography='heading' textAlign='center'>
										Update
									</Text>
								</Button>
							</Box>
						</StyledForm>
					</Box>
				</Box>
			) : (
				<Redirect to='/' />
			)}
		</>
	);
};

export default Account;

const StyledForm = styled('form')(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
}));
