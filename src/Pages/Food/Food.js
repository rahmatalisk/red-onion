import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import FoodCartDetail from '../FoodCartDetail/FoodCartDetail';
import Lunch from '../Lunch/Lunch';
import './Food.css'

const Food = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ borderBottom: match ? "5px solid orangered" : "none", color: match ? "red" : "black"}}
              to={to}
              {...props}
            >
              {children}
            </Link>
            {match && ""}
          </div>
        );
      }

    return (
        <div className='container'>
            <Nav className="my-4 d-flex justify-content-center">
                <CustomLink to="/breakfast" className='nav-link fw-bold fs-4 mx-4'>Breakfast</CustomLink>
                <CustomLink to="/lunch" className='nav-link fw-bold fs-4 mx-4'>Lunch</CustomLink>
                <CustomLink to="/dinner" className='nav-link fw-bold fs-4 mx-4'>Dinner</CustomLink>
                
            </Nav>
            <Routes>
                <Route path='/' element={<Lunch></Lunch>}></Route>
                <Route path='/lunch' element={<Lunch></Lunch>}></Route>
                <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
                <Route path='/dinner' element={<Dinner></Dinner>}> </Route>
                <Route path='/fooddetail' element={<FoodCartDetail></FoodCartDetail>}></Route>
            </Routes>
            
        </div>
    );
};

export default Food;