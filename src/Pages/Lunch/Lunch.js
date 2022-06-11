import React, { useEffect, useState } from 'react';
import { Card, CardGroup as div } from 'react-bootstrap';
import FoodInfo from '../FoodInfo/FoodInfo';
import './Lunch.css'

const Lunch = () => {
    const [foods,setFood] = useState([])
    useEffect(()=>{
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    return (
        <div className='my-5'>
           <div className="foods">
               {
                   foods.map(food => <FoodInfo food={food} key={food.id}></FoodInfo>)
               }
            </div>                
        </div>
    );
};

export default Lunch;