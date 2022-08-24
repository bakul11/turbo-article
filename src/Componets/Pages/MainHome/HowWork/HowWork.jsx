import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import HowWorkCart from './HowWorkCart';

const workData = [
    {
        num: 1,
        title: 'Reading',
        disc: 'Share your unique voice and original story on Wattpad. Find the writing resources you need to craft a story only you can tell.'

    },
    {
        num: 2,
        title: 'Writing',
        disc: 'Establish a global fan base as your story gains readership and momentum. Connect with other like-minded writers through storytelling.'

    },
    {
        num: 3,
        title: 'Resourse',
        disc: 'Turbo DynamicsStar status and get your story published or adapted into film or television with Turbo DynamicsBooks and Turbo DynamicsStudios!'

    },
]

const HowWork = () => {
    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="title-sec text-center" style={{ marginBottom: '100px' }}>
                <RubberBand>
                    <h3 className='fw-bold fs-4'>How Turbo Dynamics Works</h3>
                </RubberBand>

            </div>

            <div className="row gy-5">
                {
                    workData.map(dis => <HowWorkCart dis={dis} key={dis.title}></HowWorkCart>)
                }
            </div>
        </div>
    );
};

export default HowWork;