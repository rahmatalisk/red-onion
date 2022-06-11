import React from 'react';
import { Nav } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Food from '../Food/Food';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Food></Food>
        </div>
    );
};

export default Home;