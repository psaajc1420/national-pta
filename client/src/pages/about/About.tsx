import { Box, Text } from '../../components';

const About = () => {
	return (
		<Box
			width='100%'
			maxWidth={900}
			height='100%'
			display='flex'
			justify='space-around'
			align='center'
			flexDirection='column'
			backgroundColor='transperant'
			padding='0 25px 25px 25px'
			borderBox
			margin='auto'
		>
			<Text typography='heading' size={32}>
				GET TO KNOW US
			</Text>
			<Box width='100%' height='auto' center backgroundColor='transperant'>
				<Text typography='subheading' size={18}>
					The Smart Talk is an online tool designed to help parents empower
					their children to become smart digital citizens in an increasingly
					connected world. It was created in collaboration between National PTA
					and NortonLifeLock in 2015, and since then has gained support from
					leading platforms and entities. The Smart Talk is updated on a rolling
					basis using feedback provided by parents who attend National PTA
					digital well-being events.
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				center
				flexDirection='column'
				backgroundColor='transperant'
			>
				<Box
					width='100%'
					height='auto'
					center
					margin='0 0 15px 0'
					backgroundColor='transperant'
				>
					<Text typography='heading' size={18}>
						ABOUT NATIONAL PTA
					</Text>
				</Box>
				<Text typography='text' size={16}>
					National PTA® comprises millions of families, students, teachers,
					administrators, and business and community leaders devoted to the
					educational success of children and the promotion of parent
					involvement in schools. PTA is a registered 501(c)(3) nonprofit
					association that prides itself on being a powerful voice for all
					children, a relevant resource for families and communities, and a
					strong advocate for public education. Membership in PTA is open to
					anyone who wants to be involved and make a difference for the
					education, health, and welfare of children and youth. For more
					information, visit{' '}
					<a href='https://pta.org' target='_blank' rel='noreferrer noopener'>
						PTA.org
					</a>
					.
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				center
				flexDirection='column'
				backgroundColor='transperant'
			>
				<Box
					width='100%'
					height='auto'
					center
					margin='0 0 15px 0'
					backgroundColor='transperant'
				>
					<Text typography='heading' size={18}>
						ABOUT PTA CONNECTED
					</Text>
				</Box>
				<Text typography='text' size={16}>
					National PTA launched its PTA Connected initiative in 2018 to build on
					its work in the digital space to meet the growing needs and interest
					of parents nationwide. The goal of the initiative is to deepen the
					understanding and knowledge of parents, families and teachers about
					digital safety tools and resources (such as The Smart Talk); mobilize
					PTAs, schools and communities to engage families around best practices
					and shared learning; and generate collective impact. NortonLifeLock is
					the presenting and founding sponsor of PTA Connected; other
					corporations and nonprofits additionally support this important work.
					To see all the resources and programming currently available, visit
					<a
						href='https://pta.org/connected'
						target='_blank'
						rel='noreferrer noopener'
					>
						PTA.org/Connected
					</a>
					.
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				center
				flexDirection='column'
				backgroundColor='transperant'
			>
				<Box
					width='100%'
					height='auto'
					center
					margin='0 0 15px 0'
					backgroundColor='transperant'
				>
					<Text typography='heading' size={18}>
						ABOUT NORTONLIFELOCK
					</Text>
				</Box>
				<Text typography='text' size={16}>
					NortonLifeLock Inc. (NASDAQ: NLOK) is a global leader in consumer
					Cyber Safety. NortonLifeLock is dedicated to helping secure the
					devices, identities, online privacy, and home and family needs of
					nearly 50 million consumers, providing them with a trusted ally in a
					complex digital world. For more information, visit{' '}
					<a
						href='https://nortonlifelock.com'
						target='_blank'
						rel='noreferrer noopener'
					>
						NortonLifeLock.com
					</a>
					.
					<br />
					Content on this site is based on information and educational resources
					from{' '}
					<a
						href='https://www.commonsensemedia.org/'
						target='_blank'
						rel='noreferrer noopener'
					>
						Common Sense Media
					</a>
					, a non-profit organization serving kids and families.
				</Text>
			</Box>
		</Box>
	);
};

export default About;
