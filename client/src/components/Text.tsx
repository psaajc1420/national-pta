import React from 'react';
import styled from '@emotion/styled';

interface TextProps {
	children: React.ReactNode;
	typography: 'heading' | 'subheading' | 'text';
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	size?: string | number;
	color: string;
	lineHeight?: string;
}

const Text = ({
	children,
	typography,
	tag,
	size,
	color,
	lineHeight,
}: TextProps) => {
	return (
		<StyledText
			as={tag}
			typography={typography}
			size={size}
			color={color}
			lineHeight={lineHeight}
		>
			{children}
		</StyledText>
	);
};

export default Text;

const StyledText = styled('p')<TextProps>(
	({ theme, typography, size, color, lineHeight }) => ({
		fontFamily:
			typography === 'heading'
				? theme.font.heading
				: typography === 'subheading'
				? theme.font.subheading
				: typography === 'text'
				? theme.font.text
				: theme.font.text,
		fontSize: size ? size : 14,
		fontWeight: typography === 'heading' ? 'bold' : 'normal',
		color: color ? color : theme.color.black,
		lineHeight: lineHeight ? lineHeight : 'normal',
		margin: 0,
	}),
);
