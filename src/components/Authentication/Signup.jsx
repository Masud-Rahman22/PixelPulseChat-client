import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { useState } from "react";


const Signup = () => {
    const [show, setShow] = useState(false)
    const [confirm, setConfirm] = useState(false)
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const handleClick = () => setShow(!show)
    const handleClickConfirm = () => setConfirm(!confirm)
    const postDetails = (pics) => {

    }
    const handleSubmit = () =>{

    }
    return (
        <VStack spacing={"5px"}>
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={confirm ? 'text' : 'password'}
                        placeholder="Enter Your Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClickConfirm}>
                            {confirm ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic" isRequired>
                <FormLabel>Upload Your Image</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
            colorScheme='blue'
            width={'100%'}
            style={{ marginTop : 15}}
            onClick={handleSubmit}
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default Signup;