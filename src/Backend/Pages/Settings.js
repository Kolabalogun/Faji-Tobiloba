import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../Function/Context';
import { auth } from '../../Utils/Firebase';
import Navbar from '../Components/Navbar';


const initialState = {

    firstName: '', lastName: '',
    email: "",
    password: "",
    confirmPassword: "",
};



const Settings = () => {



    const { navigate, setloader, notificationF, notification, setuser } = useGlobalContext()


    const [state, setstate] = useState(initialState);


    const { firstName, lastName, email, password, confirmPassword } = state;

    function handleChange(e) {
        setstate({ ...state, [e.target.name]: e.target.value });
    }

    const handleAuth = async (e) => {
        e.preventDefault();


        if (password !== confirmPassword) {
            return toast.error("Password don't match");
        }
        if (firstName && email && password) {
            setloader(true);
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setuser(user)
            await updateProfile(user, { displayName: `${firstName} ${lastName}` });
            setuser(user)
            navigate("/admin");
            setstate(initialState)
            setloader(false);
            return toast("You've successfully Signed Up");
        } else {
            return toast.error("All fields must be filled");
        }

    };


    return (

        <div className='bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard'>
            <Navbar />
            <div className="rounded py-4 px-6 h-[100vh] mt-4 w-full  shadow-lg flex flex-col">
                <div className="flex flex-col p-3
            ">
                    <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold mb-1'>Register New User</h6>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
                </div>


                <div className='w-full z-20  flex items-center justify-center'>

                    <div className="rounded py-4 px-6 h-full w-[50vh] bg-white shadow-lg  p-[90px] flex  z-1 flex-col  font-rubik text-center items-center justify-center">


                        <div className=" justify-center  items-center flex-col flex py-3">
                            <h1 className=' font-rubik text-[30px] font-bold bg-transparent z-30' >Sign Up</h1>

                            <p className='text-black py-3 text-[14px] bg-transparent z-30'>Please enter Name, Email and Password to register user</p>
                            <div className=" grid grid-cols-1 gap-6 bg-transparent z-30 my-[26px]">
                                <input onChange={handleChange} type="text" name='firstName' value={firstName} placeholder='First Name' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none  ' />
                                <input onChange={handleChange} type="text" name='lastName' value={lastName} placeholder='Last Name' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none  ' />
                                <input onChange={handleChange} type="email" name='email' value={email} placeholder='Email' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none  ' />
                                <input onChange={handleChange} type="password" name='password' value={password} placeholder='Password' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none ' />
                                <input onChange={handleChange} type="password" name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' required className='w-[300px] border py-[10px]  px-[25px] text-[14px] outline-none ' />
                            </div>

                            {notification && <p className='text-red-700 py-4 text-[14px] bg-transparent z-30'>{notification}</p>}

                            <button onClick={handleAuth} className=' z-30 px-5 py-2 bg-black border-black text-white  hover:bg-white hover:text-black  '>Sign Up</button>

                        </div>

                    </div>
                </div>


            </div>
        </div>



    )
}

export default Settings