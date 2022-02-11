import React from 'react';
import styled from '@emotion/styled';

interface BoxProps {
	children?: React.ReactNode;
	width?: string | number;
	height?: string | number;
	minHeight?: string | number;
	margin?: string | number;
	padding?: string | number;
	position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
	top?: string | number;
	bottom?: string | number;
	left?: string | number;
	right?: string | number;
	center?: boolean;
	display?: string;
	justify?: string;
	align?: string;
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	border?: string;
	borderRadius?: string | number;
	borderBox?: boolean;
	backgroundColor?: string;
	color?: string;
	visibility?: 'visible' | 'hidden';
	zIndex?: number;
	onClick?: any;
}

const Box = ({
	children,
	width,
	height,
	minHeight,
	margin,
	padding,
	position,
	top,
	bottom,
	left,
	right,
	center,
	display,
	justify,
	align,
	flexDirection,
	border,
	borderRadius,
	borderBox,
	backgroundColor,
	color,
	visibility,
	zIndex,
	onClick,
}: BoxProps) => {
	return (
		<StyledBox
			width={width}
			height={height}
			minHeight={minHeight}
			margin={margin}
			padding={padding}
			position={position}
			top={top}
			bottom={bottom}
			left={left}
			right={right}
			center={center}
			display={display}
			justify={justify}
			align={align}
			flexDirection={flexDirection}
			border={border}
			borderRadius={borderRadius}
			borderBox={borderBox}
			backgroundColor={backgroundColor}
			color={color}
			visibility={visibility}
			zIndex={zIndex}
			onClick={onClick}
		>
			{children}
		</StyledBox>
	);
};

export default Box;

const StyledBox = styled('div')<BoxProps>(
	({
		theme,
		width,
		height,
		minHeight,
		margin,
		padding,
		position,
		top,
		bottom,
		left,
		right,
		center,
		display,
		justify,
		align,
		flexDirection,
		border,
		borderRadius,
		borderBox,
		backgroundColor,
		color,
		visibility,
		zIndex,
	}) => ({
		width: width ? width : '100%',
		height: height ? height : '100%',
		minHeight: minHeight ? minHeight : undefined,
		margin: margin ? margin : 0,
		padding: padding ? padding : 0,
		position: position ? position : 'relative',
		top: top ? top : undefined,
		bottom: bottom ? bottom : undefined,
		left: left ? left : undefined,
		right: right ? right : undefined,
		display: center ? 'flex' : display ? display : 'none',
		justifyContent: center ? 'center' : justify ? justify : 'none',
		alignItems: center ? 'center' : align ? align : 'none',
		flexDirection: flexDirection ? flexDirection : 'row',
		border: border ? border : 0,
		borderRadius: borderRadius ? borderRadius : 0,
		boxSizing: borderBox ? 'border-box' : undefined,
		backgroundColor: backgroundColor ? backgroundColor : theme.color.blue,
		color: color ? color : theme.color.black,
		visibility: visibility ? visibility : 'visible',
		zIndex: zIndex ? zIndex : undefined,
	}),
);
