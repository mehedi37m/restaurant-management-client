import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddedList = () => {

    const [items, setItems] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() =>{
        fetch(`http://localhost:5000/myAddedItems/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setItems(data)
        })

    },[])

    return (
        <div>
            
        </div>
    );
};

export default AddedList;