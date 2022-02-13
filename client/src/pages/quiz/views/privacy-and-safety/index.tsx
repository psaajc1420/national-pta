import React from 'react';
import { PrivacyAndSafetyQ1 } from './questions';
import { Box } from '../../../../components';

const index = () => {
	return (
		<Box
			width='100%'
			height='100%'
			display='flex'
			flexDirection='column'
			padding='75px 100px'
			borderBox
			backgroundColor='transperant'
			overflow='break-word'
		>
			<PrivacyAndSafetyQ1 />
		</Box>
	);
};

export default index;
