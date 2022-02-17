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
					width='50%'
					height='100%'
					display='flex'
					flexDirection='column'
					backgroundColor='transperant'
				>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
				</Box>
				<Box
					width='50%'
					height='100%'
					display='flex'
					flexDirection='column'
					backgroundColor='transperant'
				>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
					<label>
						<input type='text' />
					</label>
				</Box>
				<Button width={150} height={48} type='submit' onClick={() => {}}>
					<Text typography='heading'>Submit</Text>
				</Button>
			</StyledForm>
		</Box>
	);
};

export default RegisterForm;

const StyledForm = styled('form')(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'row',
}));
