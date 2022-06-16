import React, { useEffect, useState } from 'react';


const WithAdmin = (Component) => (props) => {
    const [user, setUser] = useState(null);

    const updateUser = async () => {
        
             await fetch("http://localhost:3004/api/details", {headers: {"x-access-token": localStorage.getItem("token")}})
            .then(res => res.json())
            .then(res => {
                setUser(res)
                localStorage.setItem("iduser",res._id)
                localStorage.setItem("role",res.role)
            })

        
        
    }

    useEffect(() => {
        if(localStorage.getItem("token")) {
            updateUser();
        } else {
            window.location = "/login"
        }
    }, [])
    return (
        <>

                <Component {...props} user={user} updateUser={updateUser}/>

        </>
    );
}

export default WithAdmin;