import React from 'react';
import Zoom from 'react-reveal';

import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';

const Profile = () => {
    return (
        <div className='container justSpace'>
            <div className="row gy-5">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Zoom right>
                        <ProfileLeft />
                    </Zoom>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                    <Zoom left>
                        <ProfileRight />
                    </Zoom>
                </div>
            </div>
        </div >
    );
};

export default Profile;