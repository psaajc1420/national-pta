import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		color: {
			white: string;
			black: string;
			blue: string;
			lightBlue: string;
			green: string;
			orange: string;
			red: string;
		};
		font: {
			heading: string;
			subheading: string;
			text: string;
		};
		screen: {
			mobile: string;
			desktop: string;
			largeDesktop: string;
		};
	}
}
