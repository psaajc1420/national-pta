import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface BaseLinkProps {
	children: React.ReactNode;
	to: string;
}

const BaseLink = ({ children, to }: BaseLinkProps) => {
	return <StyledLink to={to}>{children}</StyledLink>;
};

export default BaseLink;

const StyledLink = styled(Link)<BaseLinkProps>(() => ({
	textDecoration: 'none',
	color: 'inherit',
}));
