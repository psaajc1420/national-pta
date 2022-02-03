interface IHomeCategories {
	id: number;
	category: string;
	iconName: string;
	iconSvg: string;
	color: string;
}

export const HOME_CATEGORIES: Array<IHomeCategories> = [
	{
		id: 1,
		category: 'Device Use',
		iconName: 'device-use',
		iconSvg: '/assets/illustrations/NPTA_Education Icon-11_Device Use.svg',
		color: 'red',
	},
	{
		id: 2,
		category: 'Digital Safety',
		iconName: 'digital-safety',
		iconSvg: '/assets/illustrations/NPTA_Education Icon-18_Communication.svg',
		color: 'orange',
	},
	{
		id: 3,
		category: 'Privacy',
		iconName: 'privacy',
		iconSvg: '/assets/illustrations/NPTA_Education Icon-45_Media Choices.svg',
		color: 'green',
	},
	{
		id: 4,
		category: 'Communication',
		iconName: 'communication',
		iconSvg: '/assets/illustrations/NPTA_Education Icon-51_Privacy.svg',
		color: 'lightBlue',
	},
	{
		id: 5,
		category: 'Media Choices',
		iconName: 'media-choices',
		iconSvg: '/assets/illustrations/NPTA_Education Icon-56_Security.svg',
		color: 'blue',
	},
];
