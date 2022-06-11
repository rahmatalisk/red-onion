import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

import FoodInfo from '../FoodInfo/FoodInfo';

const Dinner = () => {
    const [foods,setFood] = useState([])
    useEffect(()=>{
        fetch('dinner.json')
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

export default Dinner;