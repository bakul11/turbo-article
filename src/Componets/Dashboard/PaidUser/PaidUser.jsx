import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PaidUserCart from './PaidUserCart';
import TableAnimate from './../../Animation/TableAnimate';

const PaidUser = () => {
    const [paidUser, setPaidUser] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/paidUser')
            .then(res => res.json())
            .then(data => {
                setPaidUser(data);
                setLoader(false)
            })
            .catch(err => {
                setLoader(true);
            })
    })

    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center fs-4 mb-4'>Paid Users List: {paidUser?.length === 0 ? <span className='text-danger'>No User Found</span> : paidUser?.length}</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className='text-center bg-primary text-light '>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Email</th>
                            <th scope="col">Pack</th>
                            <th scope="col">Transition Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paidUser.map((paid, index) => <PaidUserCart paid={paid} key={paid._id} index={index} />)
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


export default PaidUser;