import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './AllUser.css';
import UserAdmin from './UserAdmin';
import TableAnimate from './../../Animation/TableAnimate';



const AllUser = () => {
    const [allUser, setAllUser] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch('https://whispering-ridge-30056.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setAllUser(data);
                setLoader(false);
            })
            .catch(err => {
                setLoader(true);
            })
    }, [])


    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center fs-4 mb-4'>All Users List: {allUser?.length === 0 ? <span className='text-danger'>No User Found</span> : allUser?.length}</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className='text-center bg-primary text-light '>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Email</th>
                            <th scope="col">Admin</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((admin, index) => <UserAdmin admin={admin} key={admin._id} index={index} allUser={allUser} setAllUser={setAllUser} />)
                        }
                    </tbody>
                </table>
            </div>
            {/* Set Loader  */}
            {
                loader ? <>

                    <TableAnimate />
                </> : ''
            }
        </div>
    );
};

export default AllUser;