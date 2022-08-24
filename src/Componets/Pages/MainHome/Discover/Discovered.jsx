import React from 'react';
import DiscoverCart from './DiscoverCart';

const disData = [
    {
        title: 'Reading Content',
        disc: 'Enter writing contests to get published, win awards, and partner with global brands.',
        photo: 'https://i.ibb.co/0KNLPBS/dis1.jpg'
    },
    {
        title: 'Writting Article',
        disc: 'turbo annual awards program committed to celebrating the best stories around the world',
        photo: 'https://i.ibb.co/RhL0zhc/dis2.jpg'
    },
    {
        title: 'Resourse Article',
        disc: 'Get featured on our hand-picked reading list and reguler read our main articleand learn more knowledge.',
        photo: 'https://i.ibb.co/GRdnnYH/dis3.jpg'
    }
]

const Discovered = () => {
    return (
        <div className='container' style={{ marginTop: '100px', marginBottom: '100px' }}>

            <h3 className='text-center mb-5 fw-bold fs-4'>Get Discovered</h3>

            <div className="row gy-5">
                {
                    disData.map(dis => <DiscoverCart dis={dis} key={dis.title}></DiscoverCart>)
                }
            </div>
        </div>
    );
};

export default Discovered;