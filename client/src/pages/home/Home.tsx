import { Box, Text } from '../../components';

const Home = () => {
	return (
		<Box center flexDirection='column' backgroundColor='green'>
			<Text typography='heading' size={32} color='white'>
				THIS IS HOME HEADING
			</Text>
			<Text typography='subheading' size={24} color='white'>
				THIS IS HOME SUBHEADING
			</Text>
			<Text typography='text' size={16} color='white'>
				THIS IS HOME TEXT
			</Text>
		</Box>
	);
};

export default Home;
