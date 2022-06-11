import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import FoodCartDetail from '../FoodCartDetail/FoodCartDetail';

const FoodInfo = ({ food }) => {
    const { img, title, price } = food;
    const navigate = useNavigate()
    const loaction = useLocation()
    const cart = [];
    const handleDetail = (food) => {
        // console.log(food)
        // navigate("/fooddetail")
        return <FoodCartDetail food={food}></FoodCartDetail>

        // return <FoodCartDetail food={food}></FoodCartDetail>
    }
    return (
        <div>
            <Card onClick={() => handleDetail(food)} className='food border-0 m-3 py-2 p-5'>
                <Card.Img variant="top" src={img} className="img-fluid" />
                <Card.Body className='text-center'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        How we dream about our future
                    </Card.Text>
                    <Card.Text>
                        <h3>${price}</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodInfo;