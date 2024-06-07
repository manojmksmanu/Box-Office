import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const Appbar = () => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const getLogout = ()=>{
        
        navigate('/signin')
        alert('Logout successfully')
    }
    useEffect(() => {
        const helloUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/user/username', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setUserName(response.data.username);
            } catch (error) {
                setError('Error fetching username');
                console.error('Error fetching username:', error);
            } finally {
                setLoading(false);
            }
        };

        helloUser(); // Call the async function
    }, []); // Empty dependency array ensures this runs once when the component mounts


    return (
        <div className="bg-blue-500 shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4 font-bold">
                Box Office
            </div>
            <div className="flex m-8">
                {loading ? 'Loading...' : error ? error : (
                    <div >
                        <div className="flex flex-col justify-center h-full ml-4 font-bold">
                            Hello, {userName}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    <button onClick={getLogout} className="bg-slate-400 p-2 rounded-full mr-2 hover:bg-slate-500 border border-white">Logout</button>
                </div>
            </div>
        </div>
    );
}