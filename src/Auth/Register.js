import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useGlobalContext } from '../Function/Context';
import { auth } from '../Utils/Firebase';


const initialState = {


    email: "",
    password: "",
    confirmPassword: "",
};

const Register = () => {
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
            await updateProfile(user, { displayName: `${firstName} ${lastName}` });
            navigate("/");
            setloader(false);
            return toast("You've successfully Signed Up");
        } else {
            return toast.error("All fields must be filled");
        }

    };



    return (
        <div>Register</div>
    )
}

export default Register