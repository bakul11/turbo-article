import { useState } from 'react';
import { useEffect } from 'react';
import auth from './../Componets/Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';



const useProfile = () => {
    const [user] = useAuthState(auth);
    const [old, setOldUser] = useState({});
    const currentUser = user?.email;


    useEffect(() => {
        fetch(`http://localhost:5000/user/${currentUser}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setOldUser(data);
                console.log("ami da vai", data)
            })

    }, [currentUser, old])
    return [old, setOldUser]
}
export default useProfile;