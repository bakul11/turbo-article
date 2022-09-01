import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../Firebase/FirebaseConfig';
import useAdmin from './../../Hooks/useAdmin';
import { faBarsProgress, faChartPie, faUsers } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='dash-section '>
            <div className='row'>
                <div className=" col-md-2">
                    <div className="dash-left" style={{ paddingTop: '150px' }}>
                        <div className="slide-menu">
                            <ul className='m-0 p-0'>
                                <li>
                                    <NavLink to='/dashboard' className='homeDsh'><FontAwesomeIcon icon={faArrowAltCircleUp} className='me-2' /> Post Article</NavLink>
                                </li>
                                <li>
                                    <NavLink to='mypost' ><FontAwesomeIcon icon={faBarChart} className='me-2' /> My Post</NavLink>
                                </li>
                                <li>
                                    {
                                        admin ? <NavLink to='alluser'> <FontAwesomeIcon icon={faChartPie} className='me-2' />Manage Users</NavLink> : ''
                                    }
                                </li>
                                <li>
                                    {
                                        admin ? <NavLink to='allpost'> <FontAwesomeIcon icon={faUsers} className='me-2' />All User Post</NavLink> : ''
                                    }
                                </li>
                                <li>
                                    {
                                        admin ? <NavLink to='subcribe'> <FontAwesomeIcon icon={faBarsProgress} className='me-2' />Subcribe User</NavLink> : ''
                                    }
                                </li>
                                <li>
                                    <NavLink to='paidUser' ><FontAwesomeIcon icon={faBarChart} className='me-2' /> Paid Users</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-10" style={{ paddingTop: '100px' }}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;