import React from 'react';
import { Form } from 'react-bootstrap';
import background from '../../images/Background.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${background})`,height:"450px",backgroundRepeat:"no-repeat",backgroundSize:"100%"}} className="w-100 d-flex flex-column justify-content-center">
            <h1 className='text-center'>Best Food waiting for your Belly</h1>
            <div style={{borderRadius:"18px"}} className='d-flex w-50 mx-auto bg-white my-4'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 border-0 outline-0 fs-5"
                    aria-label="Search"
                    style={{borderRadius:"18px 0 0 18px"}}
                />
                <button style={{ borderRadius: '18px' }} className="btn bg-danger text-light px-4 w-25 fs-5">Sing Up</button>
            </div>
        </div>
    );
};

export default Banner;