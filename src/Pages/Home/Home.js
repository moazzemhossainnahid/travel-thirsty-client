import React from 'react';
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
    );
};

export default Home;