import React from 'react';

const PaidUserCart = ({ paid, index }) => {
    const { email, pack, transactionId } = paid;
    return (
        <tr className='h3 fs-6 text-center'>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{pack}</td>
            <td>{transactionId}</td>
        </tr>
    );
};

export default PaidUserCart;