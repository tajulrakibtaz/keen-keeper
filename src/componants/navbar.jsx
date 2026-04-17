import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdStats } from 'react-icons/io';
import { Ri24HoursFill, RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between'>
            <div><samp className='text-black text-[50px]'>Keen</samp><samp className='text-emerald-800 text-[50px]'>Keeper</samp></div>
            <div className='space-x-2'>
            <button>
                   <NavLink
  to="/"
  className={({ isActive }) =>
    `flex items-center gap-2 ${
      isActive
        ? "bg-green-900 rounded-md p-3 text-amber-50"
        : "rounded-md p-3"
    }`
  }
>
  <FaHome />
  <span>Home</span>
</NavLink>
            </button>
                <button>
          <NavLink
  to="/timeline"
  className={({ isActive }) =>
    `flex items-center gap-2 ${
      isActive
        ? "bg-green-900 rounded-md p-3 text-amber-50"
        : "rounded-md p-3"
    }`
  }
>
  <RiTimeLine />
  <span>Timeline</span>
</NavLink>
                </button>
                <button>
<NavLink
  to="/stat"
  className={({ isActive }) =>
    `flex items-center gap-2 ${
      isActive
        ? "bg-green-900 rounded-md p-3 text-amber-50"
        : "rounded-md p-3"
    }`
  }
>
  <IoMdStats />
  <span>Stat</span>
</NavLink>

                </button>
            </div>
        </div>
    );
};

export default Navbar;