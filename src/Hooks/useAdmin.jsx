import { useState, useEffect } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const email = user?.email;

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(result => {
                    const getAdmin = result?.admin;
                    setAdmin(getAdmin);
                })
        }
    }, [user, email])
    return [admin, setAdmin];
}
export default useAdmin;