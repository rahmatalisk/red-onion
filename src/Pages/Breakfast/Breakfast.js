import React, { useEffect, useState } from 'react';

import FoodInfo from '../FoodInfo/FoodInfo';

const Breakfast = () => {
    const [foods,setFood] = useState([])
    useEffect(()=>{
        fetch('breakfast.json')
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

export default Breakfast;