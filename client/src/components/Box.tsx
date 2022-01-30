import React from 'react';
import styled from '@emotion/styled';

interface BoxProps {
	children?: React.ReactNode;
	width?: string | number;
	height?: string | number;
	margin?: string | number;
	marginX?: string | number;
	marginY?: string | number;
	padding?: string | number;
	paddingX?: string | number;
	paddingY?: string | number;
	position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
	top?: string | number;
	bottom?: string | number;
	left?: string | number;
	right?: string | number;
	center?: boolean;
	display?: string;
	justify?: string;
	align?: string;
	border?: string;
	borderRadius?: string | number;
	backgroundColor?: string;
	color?: string;
	visibility?: 'visible' | 'hidden';
}

const Box = ({
	children,
	width,
	height,
	margin,
	marginX,
	marginY,
	padding,
	paddingX,
	paddingY,
	position,
	top,
	bottom,
	left,
	right,
	center,
	display,
	justify,
	align,
	border,
	borderRadius,
	backgroundColor,
	color,
	visibility,
}: BoxProps) => {
	return (
		<StyledBox
			width={width}
			height={height}
			margin={margin}
			marginX={marginX}
			marginY={marginY}
			padding={padding}
			paddingX={paddingX}
			paddingY={paddingY}
			position={position}
			top={top}
			bottom={bottom}
			left={left}
			right={right}
			center={center}
			display={display}
			justify={justify}
			align={align}
			border={border}
			borderRadius={borderRadius}
			backgroundColor={backgroundColor}
			color={color}
			visibility={visibility}
		>
			{children}
		</StyledBox>
	);
};

export default Box;

const StyledBox = styled('div')(
	({
		width,
		height,
		margin,
		marginY,
		marginX,
		padding,
		paddingX,
		paddingY,
		position,
		top,
		bottom,
		left,
		right,
		center,
		display,
		justify,
		align,
		border,
		borderRadius,
		backgroundColor,
		color,
		visibility,
	}: BoxProps) => ({
		width: width ? width : '100%',
		height: height ? height : '100%',
		margin: margin ? margin : 0,
		marginX: marginX ? marginX : 0,
		marginY: marginY ? marginY : 0,
		padding: padding ? padding : 0,
		paddingX: paddingX ? paddingX : 0,
		paddingY: paddingY ? paddingY : 0,
		position: position ? position : 'relative',
		top: top ? top : 0,
		bottom: bottom ? bottom : 0,
		left: left ? left : 0,
		right: right ? right : 0,
		display: center ? 'flex' : display ? display : 'none',
		justifyContent: center ? 'center' : justify ? justify : 'none',
		alignItems: center ? 'center' : align ? align : 'none',
		border: border ? border : 0,
		borderRadius: borderRadius ? borderRadius : 0,
		backgroundColor: backgroundColor ? backgroundColor : 'blue',
		color: color ? color : 'black',
		visibility: visibility ? visibility : 'visible',
	}),
);
