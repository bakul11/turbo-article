import ResourseCart from "./ResourseCart";
import React from 'react';

const disData = [
    {
        title: '50+',
        disc: 'Resources',
        photo: 'https://static.wattpad.com/img/landing/portalbg1.svg'
    },
    {
        title: '90 MILLION',
        disc: 'Readers',
        photo: 'https://static.wattpad.com/img/landing/portalbg3.svg'
    },
    {
        title: '1000+',
        disc: 'Story deals',
        photo: 'https://static.wattpad.com/img/landing/portalbg2.svg'
    }
]

const Resourse = () => {
    return (
        <div className='container' style={ { marginBottom: '100px' } }>
            <div className="row gy-2">
                {
                    disData.map(dis => <ResourseCart dis={ dis } key={ dis.title }></ResourseCart>)
                }
            </div>
        </div>
    );
};

export default Resourse;