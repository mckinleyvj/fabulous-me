import {
	Box,
	VStack,
	Text,
	FormControl,
	FormLabel,
	HStack,
	InputGroup,
	Input,
	InputLeftAddon,
	Textarea,
	Button,
	Image,
	useMediaQuery,
	Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

const Contact = () => {
	const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

	const initialState = {
		nameVal: '',
		mailVal: '',
		phoneVal: '',
		messageVal: '',
	};

	const [{ nameVal, mailVal, phoneVal, messageVal }, setState] = useState(initialState);

	const onChange = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<Box overflowX='hidden'>
			<Box w='100%' h='100%' opacity='0.3' pos='fixed' zIndex='-9999'>
				<Image
					h='100vh'
					w='100vw'
					src='https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
				/>
			</Box>
			<Header />
			{isSmallerThan800 ? (
				<>
					<Box alignSelf='center' w='100vw'>
						<VStack>
							<Text fontSize='3xl'>CONTACT Us</Text>
							<Text fontSize='lg'> Leave us a message </Text>
						</VStack>
					</Box>

					<Box>
						<Box display='flex' flexDirection='column'>
							<Flex
								width='95vw'
								// height='100vh'
								pt='40px'
								background='#EFF9F8'
								// ml='40px'
								mb='50px'
								boxShadow='lg'
								borderRadius='10px'
								// pl='50px'
								flexDirection='column'
								alignItems='center'
								alignSelf='center'>
								<HStack px='25' w='100%'>
									<FormControl>
										<FormLabel>Name</FormLabel>
										<InputGroup>
											<Input
												variant='flushed'
												name='nameVal'
												value={nameVal}
												onChange={onChange}
											/>
										</InputGroup>
									</FormControl>
								</HStack>

								<HStack px='25' pt='25px' w='100%'>
									<FormControl>
										<FormLabel>Email Address</FormLabel>
										<InputGroup>
											<Input
												variant='flushed'
												name='mailVal'
												value={mailVal}
												onChange={onChange}
											/>
										</InputGroup>
									</FormControl>
								</HStack>
								<HStack px='25' pt='25px' w='100%'>
									<FormControl>
										<FormLabel>Phone Number</FormLabel>
										<InputGroup>
											<InputLeftAddon children='+673' />
											<Input
												variant='flushed'
												name='phoneVal'
												value={phoneVal}
												onChange={onChange}
											/>
										</InputGroup>
									</FormControl>
								</HStack>
								<FormControl px='25' pt='25px'>
									<FormLabel>Message</FormLabel>
									<Textarea
										height='150px'
										resize='vertical'
										placeholder='Write us something...'
										name='messageVal'
										value={messageVal}
										onChange={onChange}
									/>
								</FormControl>
								<Button
									my='25'
									// ml='590px'
									width={'250px'}
									size='lg'
									colorScheme='blue'
									onClick={() => {
										if (!nameVal || !mailVal || !phoneVal || !messageVal) {
											return false;
										} else {
											alert(
												'Message sent.\n' +
													'Name: ' +
													nameVal +
													'\nEmail: ' +
													mailVal +
													'\nPhone: ' +
													phoneVal +
													'\nMessage: ' +
													messageVal
											);
											setState(initialState);
										}
									}}>
									Send Message
								</Button>
							</Flex>
							<Flex
								width='95vw'
								// height='100vh'
								pt='40px'
								background='neutral.500'
								color='white'
								// ml='40px'
								mb='50px'
								boxShadow='lg'
								borderRadius='10px'
								// pl='50px'
								flexDirection='column'
								alignItems='center'
								alignSelf='center'>
								<VStack boxShadow='md'>
									<Text fontSize='3xl'> Contact Information</Text>
								</VStack>
								<VStack boxShadow='md' alignItems='flex-start'>
									<Text mt='20px' fontWeight='bold'>
										Bengkurong Masin
									</Text>
									<Text>Phone: +673 8 999999</Text>
									<Text>Email: fabulousme_b@test.com</Text>
								</VStack>
								<VStack boxShadow='md' alignItems='flex-start'>
									<Text mt='20px' fontWeight='bold'>
										Mentiri
									</Text>
									<Text>Phone: +673 8 999998</Text>
									<Text>Email: fabulousme_m@test.com</Text>
								</VStack>
								<VStack boxShadow='md' alignItems='flex-start'>
									<Text mt='20px' fontWeight='bold'>
										Tutong
									</Text>
									<Text>Phone: +673 8 999997</Text>
									<Text>Email: fabulousme_t@test.com</Text>
								</VStack>
							</Flex>
						</Box>
					</Box>
				</>
			) : (
				<>
					<Box alignSelf='center' w='80vw'>
						<VStack>
							<Text fontSize='3xl'> Contact Us</Text>
							<Text fontSize='lg'> Leave us a message </Text>
						</VStack>
					</Box>

					<Box mt='50px'>
						<Box display='flex'>
							<Box
								width='70vw'
								height='100vh'
								pt='40px'
								background='#EFF9F8'
								ml='40px'
								mb='50px'
								boxShadow='lg'
								borderLeftRadius='10px'
								pl='50px'>
								<HStack pr='50px'>
									<FormControl>
										<FormLabel>Name</FormLabel>
										<InputGroup>
											<Input
												variant='flushed'
												name='nameVal'
												value={nameVal}
												onChange={onChange}
											/>
										</InputGroup>
									</FormControl>
								</HStack>

								<HStack pr='50px' pt='50px'>
									<FormControl>
										<FormLabel>Email Address</FormLabel>
										<InputGroup>
											<Input
												variant='flushed'
												name='mailVal'
												value={mailVal}
												onChange={onChange}
											/>
										</InputGroup>
									</FormControl>
									<FormControl>
										<FormLabel>Phone Number</FormLabel>
										<InputGroup>
											<InputLeftAddon children='+673' />
											<Input
												variant='flushed'
												name='phoneVal'
												value={phoneVal}
												onChange={onChange}
											/>
										</InputGroup>
									</FormControl>
								</HStack>
								<FormControl pr='50px' pt='50px'>
									<FormLabel>Message</FormLabel>
									<Textarea
										height='290px'
										resize='vertical'
										placeholder='Write us something...'
										name='messageVal'
										value={messageVal}
										onChange={onChange}
									/>
								</FormControl>
								<Button
									mt='20px'
									ml='590px'
									width={'250px'}
									size='lg'
									colorScheme='blue'
									onClick={() => {
										if (!nameVal || !mailVal || !phoneVal || !messageVal) {
											return false;
										} else {
											alert(
												'Message sent.\n' +
													'Name: ' +
													nameVal +
													'\nEmail: ' +
													mailVal +
													'\nPhone: ' +
													phoneVal +
													'\nMessage: ' +
													messageVal
											);
											setState(initialState);
										}
									}}>
									Send Message
								</Button>
							</Box>
							<Box
								width='30%'
								height='100vh'
								pt='40px'
								mr='40px'
								mb='50px'
								borderRightRadius='10px'
								boxShadow='lg'
								bg='neutral.500'
								color='white'>
								<VStack boxShadow='md'>
									<Text fontSize='3xl'> Contact Information</Text>
								</VStack>
								<VStack boxShadow='md'>
									<Text mt='20px'>Shop: Bengkurong Masin</Text>
									<Text>Phone: +673 8 999999</Text>
									<Text>Email: fabulousme_b@test.com</Text>
								</VStack>
								<VStack boxShadow='md'>
									<Text mt='20px'>Shop: Mentiri</Text>
									<Text>Phone: +673 8 999998</Text>
									<Text>Email: fabulousme_m@test.com</Text>
								</VStack>
								<VStack boxShadow='md'>
									<Text mt='20px'>Shop: Tutong</Text>
									<Text>Phone: +673 8 999997</Text>
									<Text>Email: fabulousme_t@test.com</Text>
								</VStack>
							</Box>
						</Box>
					</Box>
				</>
			)}

			<Footer />
		</Box>
	);
};

export default Contact;
