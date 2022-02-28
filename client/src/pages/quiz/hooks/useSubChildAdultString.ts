import React from 'react';

const useSubChildAdultString = () => {
	const parseText = (text: string) => {
		return text
			.replaceAll('(ADULT)', 'ADULTNAME')
			.replaceAll('(CHILD)', 'CHILDNAME');
	};

	return parseText;
};

export default useSubChildAdultString;
