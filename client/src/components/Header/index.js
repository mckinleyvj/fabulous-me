import {
	Button,
	ButtonGroup,
	Flex,
	HStack,
	MenuItem,
	MenuDivider,
	Menu,
	MenuButton,
	Icon,
	MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
	const navigate = useNavigate();

	const isLoggedIn = Auth.loggedIn();

	const handleLogout = () => {
		Auth.logout();
		window.location.replace('/login');
	};

	const buttonStyles = {
		borderRadius: '15px',
	};

	const navLinksStyles = {
		color: 'black',
		variant: 'link',
		fontWeight: 'semibold',
	};

	return (
		<>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				height='12vh'
				width='100vw'
				px='5vw'>
				<HStack spacing='5vw' display={['none', 'none', 'flex', 'flex']}>
					<Button
						fontSize={18}
						onClick={() => navigate('/')}
						{...navLinksStyles}
						_hover={{ textDecoration: 'underline', textDecorationColor: 'brand.300' }}>
						Home
					</Button>
					<Button
						fontSize={18}
						onClick={() => navigate('/about')}
						{...navLinksStyles}
						_hover={{ textDecoration: 'underline', textDecorationColor: 'brand.300' }}>
						About Us
					</Button>
					<Button
						fontSize={18}
						onClick={() => navigate('/contact')}
						{...navLinksStyles}
						_hover={{ textDecoration: 'underline', textDecorationColor: 'brand.300' }}>
						Contact Us
					</Button>
				</HStack>
				<ButtonGroup alignItems='end' display={['none', 'none', 'flex', 'flex']}>
					{isLoggedIn === true ? (
						<Flex>
							<Button
								fontSize={18}
								onClick={() => navigate('/dashboard')}
								variant='ghost'
								{...buttonStyles}
								_hover={{ bg: 'brand.500', color: 'white', boxShadow: 'dark-lg' }}>
								Dashboard
							</Button>
							<Button
								fontSize={18}
								onClick={handleLogout}
								variant='ghost'
								{...buttonStyles}
								_hover={{ bg: 'brand.500', color: 'white', boxShadow: 'dark-lg' }}>
								Logout
							</Button>
						</Flex>
					) : (
						<Button
							fontSize={18}
							onClick={() => navigate('/login')}
							variant='ghost'
							{...buttonStyles}
							_hover={{ bg: 'brand.500', color: 'white', boxShadow: 'dark-lg' }}>
							Register / Sign in
						</Button>
					)}
				</ButtonGroup>

				<Menu>
					<MenuButton display={['flex', 'flex', 'none', 'none']}>
						<Icon as={FiMenu} h={7} w={7} />
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => navigate('/')}>Home</MenuItem>
						<MenuItem onClick={() => navigate('/about')}>About Us</MenuItem>
						<MenuItem onClick={() => navigate('/contact')}>Contact Us</MenuItem>
						<MenuDivider />
						{isLoggedIn === true ? (
							<>
								<MenuItem onClick={() => navigate('/dashboard')}>
									Dashboard
								</MenuItem>
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</>
						) : (
							<>
								<MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
								<MenuItem onClick={() => navigate('/signup')}>Sign Up</MenuItem>
							</>
						)}
					</MenuList>
				</Menu>
			</Flex>
		</>
	);
};

export default Header;
