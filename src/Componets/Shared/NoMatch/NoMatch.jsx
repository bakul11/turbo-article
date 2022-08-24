import React from 'react';
import logo2 from '../../../images/404.jpg'
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';

const NoMatch = () => {
    return (
        <div className='container text-center' style={{ marginTop: '150px', marginBottom: '100px' }}>
            <Zoom>
                <img src={logo2} alt='logo'></img>
                <h6 className='mb-3 mt-3'>We can't find this pages.Go to <Link to='/'>HomePage</Link></h6>
            </Zoom>
        </div>
    );
};

export default NoMatch;