import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

const UserAdmin = ({ admin, index, setAllUser, allUser }) => {
    const { email, _id, role } = admin;


    //make admin 
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                swal('Admin Created Success', 'admin create successfully Done', 'success');
                window.location.reload();
            })
            .catch(err => {
                swal("Admin Create Fail", "You haven't access admin", "error");
            })
    }

    //handle Remove admin 
    const handleRemoveAdmin = (id) => {
        swal({
            title: "Are you sure?",
            text: "Do you want delete this user?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/user/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            const remaingData = allUser.filter(post => post._id !== id);
                            setAllUser(remaingData);
                            swal("Delete! User has been deleted!", {
                                icon: "success",
                            });
                        })
                        .catch(err => {
                            swal('Delete Fail', 'Your deleted fail try aggain', 'error');
                        })
                } else {
                    swal("Your article user file is safe!");
                }
            });
    }


    return (
        <tr className='h3 fs-6'>
            <td className='text-center'>{index + 1}</td>
            <td className='text-center'>{email}</td>
            <td className='text-center'>{role === 'admin' ? <span className='text-success'>Admin</span> : <button className="bg-success text-light border-0 rounded-pill p-2" onClick={makeAdmin}>Make Admin</button>}</td>
            <td className='text-center'><FontAwesomeIcon icon={faTrashAlt} className='text-danger' style={{ cursor: 'pointer' }} onClick={() => handleRemoveAdmin(_id)} /></td>
        </tr>
    );
};

export default UserAdmin;