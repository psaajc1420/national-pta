import { Box, Button, Text } from '../../components';

const Home = () => {
	return (
		<Box height={250} center flexDirection='column' backgroundColor='green'>
			<Text typography='heading' size={32} color='white'>
				THIS IS HOME HEADING
			</Text>
			<Text typography='subheading' size={24} color='white'>
				THIS IS HOME SUBHEADING
			</Text>
			<Text typography='text' size={16} color='white'>
				THIS IS HOME TEXT
			</Text>
			<Button onClick={() => {}} width={250} height={56}>
				<Text typography='text' size={16} color='white'>
					Get Started
				</Text>
			</Button>
		</Box>
	);
};

export default Home;
