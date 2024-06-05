import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSignUp = async () => {
        try {
          // Make an API call to your backend
          const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
            username,
            firstName,
            lastName,
            password

          });
               // Assuming the response contains a token upon successful login
        localStorage.setItem('token', response.data.token);
  
        // Navigate to the dashboard
        // You'll need to import the 'navigate' function from your router library
        alert("Signup successfully")
        navigate('/signin');
      } catch (error) {
        // Handle authentication error (e.g., display an alert)
        console.error('Authentication failed:', error.message);
        alert("Please enter valid details")
      }
    };


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} placeholder="John" label={"First Name"} />
                <InputBox onChange={(e) => {
                    setLastName(e.target.value);
                }} placeholder="Doe" label={"Last Name"} />
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} placeholder="rebuiltx@gmail.com" label={"Email"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder="minimum 6 characters" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={handleSignUp} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}