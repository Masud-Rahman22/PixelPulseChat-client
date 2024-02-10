import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { useState } from "react";


const Login = () => {
    const [show, setShow] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const handleClick = () => setShow(!show)
    const handleClickConfirm = () => setConfirm(!confirm)
    const handleSubmit = () =>{

    }
    return (
        <VStack spacing={"5px"}>
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
                    <InputRightElement width='4.5rem' >
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
            <Button
            colorScheme='blue'
            width={'100%'}
            style={{ marginTop : 15}}
            onClick={handleSubmit}
            >
                Login
            </Button>
            <Button
            variant={"solid"}
            colorScheme="red"
            width={"100%"}
            onClick={()=>{
                setEmail('guest@example.com');
                setPassword('123456')
            }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    );
};

export default Login;