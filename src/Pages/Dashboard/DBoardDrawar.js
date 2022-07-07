import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const DBoardDrawar = () => {
    return (
        <div>
            <div class="drawer drawer-mobile pt-16 lg:pt-0">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        {/* <!-- Page content here --> */}

                        <Outlet />

                    </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 gap-2 pt-10 lg:mt-16 overflow-y-auto w-80 bg-slate-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                       <li><Link to="addtour">Add Tour</Link></li>
                        <li><Link to="addhotel">Add Hotel</Link></li>
                        <li><Link to="manageusers">Manage Users</Link></li>
                        <li><Link to="managetours">Manage Tours</Link></li>
                        <li><Link to="managehotels">Manage Hotels</Link></li>
                        <li><Link to="managereviews">Manage Reviews</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DBoardDrawar;