import React from 'react';
import { useParams } from 'react-router-dom';

const FoodCartDetail = ({food}) => {
    console.log(food)
    const {id} = useParams()
    // const {img,name,}
    return (
        <div>
            <h1>dfg</h1>
        </div>
    );
};

export default FoodCartDetail;