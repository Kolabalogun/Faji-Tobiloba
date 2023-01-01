import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useGlobalContext } from '../Function/Context';
import { auth } from '../Utils/Firebase';



const initialState = {


    email: "",
    password: "",

};


const Login = () => {

    const { navigate, setloader, notificationF, notification, setuser } = useGlobalContext()



    const [state, setstate] = useState(initialState);


    const { email, password } = state;

    function handleChange(e) {
        setstate({ ...state, [e.target.name]: e.target.value });

        console.log(state);
    }

    const handleAuth = async (e) => {
        e.preventDefault();


        if (email && password) {
            setloader(true);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    localStorage.setItem("isLoggedIn", user);
                    setuser(user)
                    navigate("/admin");
                    setloader(false);
                    return toast("You've successfully Signed In");
                })

                .catch((error) => {
                    setloader(true);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    notificationF(errorMessage);
                    setloader(false);
                });
        } else {
            return toast.error("All fields must be filled");
        }

    };





    return (
        <div className='h-screen bg-cover flex items-center justify-center' style={{ backgroundImage: "url('404.jpg')" }}

        >
            <div className="bg-black absolute opacity-60 z-1 h-[50vh] w-[50vh]"></div>

            <div className="p-[90px] flex  z-1 flex-col  font-rubik text-center items-center justify-center">
                <h1 className='text-white font-rubik text-[30px] font-bold bg-transparent z-30' >Sign In</h1>

                <p className='text-white text-[14px] bg-transparent z-30'>Please enter your Email and Password</p>
                <div className=" grid grid-cols-1 gap-6 bg-transparent z-30 my-[26px]">
                    <input onChange={handleChange} type="email" name='email' value={email} placeholder='Email' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none  ' />
                    <input onChange={handleChange} type="password" name='password' value={password} placeholder='Password' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none ' />
                </div>

                {notification && <p className='text-red-700 py-4 text-[14px] bg-transparent z-30'>{notification}</p>}

                <button onClick={handleAuth} className=' z-30 px-5 py-2 bg-white border-none text-black  hover:bg-black hover:text-white'>Sign In</button>

            </div>

        </div>
    )
}

export default Login