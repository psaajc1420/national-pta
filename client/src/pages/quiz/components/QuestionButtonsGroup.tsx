import React from 'react';
import { Box, Button, Text } from '../../../components/index';
import { useTheme } from '@emotion/react';

const QuestionButtonsGroup = ({
	isGuest = true,
	onContinue,
	onPrevious,
	onSave,
}: {
	isGuest?: boolean;
	onContinue: () => void;
	onPrevious: () => void;
	onSave: () => void;
}) => {
	const theme = useTheme();
	const handleContinue = () => {
		onContinue();
	};
	const handlePrevious = () => {
		onPrevious();
	};
	const handleSave = () => {
		onSave();
	};
	return (
		<Box
			width='100%'
			height='auto'
			display='flex'
			justify='space-around'
			align='center'
			backgroundColor='transperant'
			margin='15px 0 0 0'
		>
			{isGuest ? (
				<>
					<Button
						width={250}
						height={48}
						onClick={handlePrevious}
						backgroundColor={theme.color.blue}
					>
						<Text typography='heading' textAlign='center'>
							Previous
						</Text>
					</Button>
					<Button width={250} height={48} onClick={handleContinue}>
						<Text typography='heading' textAlign='center'>
							Continue
						</Text>
					</Button>
				</>
			) : (
				<>
					<Button width={150} height={48} onClick={handleContinue}>
						<Text typography='heading' textAlign='center'>
							Previous
						</Text>
					</Button>
					<Button width={150} height={48} onClick={handleSave}>
						<Text typography='heading' textAlign='center'>
							Save & Exit
						</Text>
					</Button>
					<Button width={150} height={48} onClick={handlePrevious}>
						<Text typography='heading' textAlign='center'>
							Continue
						</Text>
					</Button>
				</>
			)}
		</Box>
	);
};

export default QuestionButtonsGroup;
