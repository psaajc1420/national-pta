import { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { QuizAnswersContext } from '../Quiz';

interface CategoryButtonProps {
	icon?: string;
	ageGroup?: string;
	onClick: any;
	selected?: boolean;
	isClickDisabled?: boolean;
}

const CategoryButton = ({
	icon,
	ageGroup,
	onClick,
	selected,
}: CategoryButtonProps) => {
	// @ts-expect-error
	const { quizState } = useContext(QuizAnswersContext);
	const [isClickDisabled, setIsClickDisabled] = useState(false);
	useEffect(() => {
		if (
			quizState.currentAgeGroup.length > 0 &&
			quizState.currentAgeGroup !== ageGroup &&
			!selected
		) {
			setIsClickDisabled(true);
		}
	}, [quizState.currentAgeGroup]);
	return (
		// @ts-expect-error
		<StyledButton
			onClick={isClickDisabled ? null : () => onClick()}
			selected={selected}
			isClickDisabled={isClickDisabled}
		>
			<img src={window.location.origin + icon} alt={ageGroup} />
		</StyledButton>
	);
};

export default CategoryButton;

const StyledButton = styled('div')<CategoryButtonProps>(
	({ selected, isClickDisabled }) => ({
		width: 150,
		height: 75,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		cursor: 'pointer',
		transition: 'all .1s ease-in-out',
		transform: selected ? 'scale(1.2)' : undefined,
		['&:hover']: {
			transform: isClickDisabled ? undefined : 'scale(1.2)',
		},

		img: {
			width: 150,
			height: 'auto',
		},
	}),
);
