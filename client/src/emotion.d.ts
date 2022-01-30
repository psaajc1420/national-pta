import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		color: {
			white: string;
			black: string;
			blue: string;
			gray: string;
		};
		font: {
			heading: string;
			subheading: string;
			text: string;
		};
	}
}
