import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import UseToken from '../../Components/UseToken';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Authentication = () => {
    const [user] = useAuthState(auth);
    const [token] = UseToken();
    const navigate = useNavigate();


    const handleSignOut = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem('accessToken');
                if (!token) {
                    navigate('/signin');
                    toast.success("User SignOut Successfully", { position: "top-left" });
                }
            })
    }
    return (
        <div>
            <button className="text-xl font-bold text-white bg-rose-600 hover:bg-accent focus:bg-gray-800 px-5 py-2 rounded-2xl cursor-pointer">
                {
                    user ? <button onClick={handleSignOut} >SignOut</button> : <Link to="/signin">SignIn</Link>
                }
            </button>
        </div>
    );
};

export default Authentication;