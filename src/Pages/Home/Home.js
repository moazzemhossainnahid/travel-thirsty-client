import React from 'react';
<<<<<<< HEAD
import Footer from '../Footer/Footer';
import Card from './Card';

const Home = () => {
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <h3 className="text-6xl font-semibold text-rose-700">Welcome to Travel Thirsty</h3>
            </div>
            <div>
                <Card></Card>
                <Footer />
            </div>
        </>
=======
import HomeHeader from '../Header/HomeHeader';
import ShortCard from './ShortCard/ShortCard';

const Home = () => {
    return (
        <div className=''>
            <HomeHeader/>
            <ShortCard/>
            
        </div>
>>>>>>> nahid
    );
};

export default Home;