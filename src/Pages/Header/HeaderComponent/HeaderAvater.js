import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAdmin from '../../../Components/useAdmin';
import UseToken from '../../../Components/UseToken';
import auth from '../../../firebase.init';

const HeaderAvater = () => {
  const [user] = useAuthState(auth);
  const [token] = UseToken();
  const [admin] = useAdmin();
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
    <div class="dropdown dropdown-end">

      <div className="flex justify-center items-center gap-2">
      <div class="badge badge-primary hidden lg:block badge-outline mx-auto">{user?.displayName}</div>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img className='border-2 border-white rounded-full' src="https://placeimg.com/80/80/people" alt='' />
              </div>
            </label>
      </div>

      <ul tabindex="0" class="mt-2 p-2 shadow menu menu-compact dropdown-content gap-2 bg-base-100 text-gray-500 rounded-box w-44">
      <div class="badge badge-natural block lg:hidden badge-outline mx-auto">{user?.displayName}</div>
        <li><Link to="/profile">Profile</Link></li>

        {
          admin && <li><Link to="/dashboard">Dashboard</Link></li>
        }

        {
          !admin && <li><Link to="/bookings">Bookings</Link></li>
        }

        {
          !admin && <li><Link to="/addreview">Add Review</Link></li>
        }

        <li><button onClick={handleSignOut}>SignOut</button></li>
      </ul>
    </div>
  );
};

export default HeaderAvater;