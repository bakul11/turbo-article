import React from 'react';
import saiful from '../../../images/shaiful.png';
import rabuil from '../../../images/rabuil.jpg';
import bakul from '../../../images/bakul3.jpg';
import AboutCart from './AboutCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import RubberBand from 'react-reveal/RubberBand';
import AboutTop from './AboutTop';



const teamData = [
    {
        photo: rabuil,
        name: "Rabiul Islam",
        title: "Frontend Developer",
        opp: 'Team Member',
        fb: "https://www.facebook.com/profile.php?id=100010907586352",
        linkedin: "https://linkedin.com/in/rabiul-islam-829665234",
        github: "https://github.com/rabiul1399"

    },
    {
        photo: saiful,
        name: "Saiful Islam Arif",
        title: "Backend Devloper",
        opp: 'Team Leader',
        fb: "https://www.facebook.com/aisaifulbd",
        linkedin: "https://www.facebook.com/aisaifulbd",
        github: "https://github.com/SIArifBD",
        leader: "primary",

    },
    {
        photo: bakul,
        name: "Bakul Ray Ajoy",
        title: "Frontend Developer",
        opp: 'Team Member',
        fb: "https://www.facebook.com/bakulray.ajoy/?_rdc=1&_rdr",
        linkedin: "https://www.linkedin.com/in/bakul-chandro-ray-ab01a41b8/",
        github: "https://github.com/bakul11"
    }
]

const AboutUs = () => {
    return (
        <div className='container justSpace'>
            <AboutTop />
            <section className="team-section">
                <div className="team-title text-center" style={{ marginBottom: '100px' }}>
                    <RubberBand>
                        <h4 className='fw-bold fs-4'>Meet with Us</h4>
                        <div className="des d-flex justify-content-center align-items-center">
                            <div className='bg-danger rounded-circle' style={{ height: '5px', width: '100px' }}></div>
                            <div className='ms-2 me-2'><FontAwesomeIcon icon={faHandHoldingHeart} /></div>
                            <div className='bg-danger rounded-circle' style={{ height: '5px', width: '100px' }}></div>
                        </div>
                        <p className='text-secondary'>Do you want build your any project just contact with us</p>
                    </RubberBand>
                </div>
                <div className="row">
                    {
                        teamData.map(team => <AboutCart singleTeam={team} key={team.name}></AboutCart>)
                    }
                </div>
            </section>
        </div>
    );
};

export default AboutUs;