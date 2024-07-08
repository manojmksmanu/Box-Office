import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        // Make an API call to your backend
        const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
          username,
          password,
        });
             // Assuming the response contains a token upon successful login
      localStorage.setItem('token', response.data.token);

      // Navigate to the dashboard
      // You'll need to import the 'navigate' function from your router library
      navigate('/dashboard');
    } catch (error) {
      // Handle authentication error (e.g., display an alert)
      console.error('Authentication failed:', error.message);
      alert("Please fill valid username and password")
    }
  };

    return <div className="bg-slate-300 h-screen flex justify-center">
        
        <div className="flex flex-col justify-center "  >
            <div className="bg-white w-80 h-max px-4 rounded-lg text-center p-2">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} placeholder="rebuiltx@gmail.com" label={"Email"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder="minimum 6 characters" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={handleSignIn} label={"Sign In"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
}