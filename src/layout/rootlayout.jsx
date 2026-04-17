import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

const Rootlayout = () => {
    return (
        <div >
            <div className='max-w-[1110px] mx-auto '>
            <Navbar></Navbar>


    <Outlet></Outlet>


    
    </div>
    
            <Footer ></Footer>
            
        </div>
    );
};

export default Rootlayout;